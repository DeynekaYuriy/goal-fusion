import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../utils/mongodb";
import { authMiddleware, AuthenticatedRequest } from "../../../middleware/auth";
import { ObjectId } from "mongodb";

interface UpdateProfileRequestBody {
  email?: string;
  name?: string;
  age?: number;
  password?: string;
}

const handler = async (req: AuthenticatedRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email, name, age, password } = req.body as UpdateProfileRequestBody;

  const { db } = await connectToDatabase();

  const user = await db
    .collection("users")
    .findOne({ _id: new ObjectId(req.user.id) });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const updates: Partial<{
    email: string;
    name: string;
    age: number;
    password: string;
  }> = {};

  if (email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }
    updates.email = email;
  }

  if (name) {
    updates.name = name;
  }

  if (age) {
    updates.age = age;
  }

  if (password) {
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password should be at least 6 characters long" });
    }
    updates.password = await bcrypt.hash(password, 10);
  }

  await db
    .collection("users")
    .updateOne({ _id: req.user.id }, { $set: updates });
  const updatedUser = await db
    .collection("users")
    .findOne({ _id: new ObjectId(req.user.id) });
  delete updatedUser.password;
  return res
    .status(200)
    .json({ message: "Profile updated successfully", user: updatedUser });
};

export default authMiddleware(handler);
