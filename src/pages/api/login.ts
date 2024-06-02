// pages/api/auth/login.ts

import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../utils/mongodb";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

interface LoginRequestBody {
  email: string;
  password: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, password } = req.body as LoginRequestBody;

    // Connect to MongoDB
    const { db } = await connectToDatabase();

    // Check if user exists
    const user = await db.collection("users").findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return res.status(200).json({ token });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
