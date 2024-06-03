import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../utils/mongodb";
import { authMiddleware, AuthenticatedRequest } from "../../../middleware/auth";
import { ObjectId } from "mongodb";

const handler = async (req: AuthenticatedRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { db } = await connectToDatabase();

    const user = await db.collection("users").findOne({ _id: new ObjectId(req.user?.id) });
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res
      .status(200)
      .json({ email: user.email, name: user.name, age: user.age });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default authMiddleware(handler);
