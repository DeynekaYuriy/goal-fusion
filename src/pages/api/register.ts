// pages/api/auth/register.ts

import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../utils/mongodb";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

interface RegisterRequestBody {
  email: string;
  password: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, password } = req.body as RegisterRequestBody;

    // Connect to MongoDB
    const { db } = await connectToDatabase();

    // Check if user already exists
    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = {
      email,
      password: hashedPassword
    };

    // Insert user into database
    const result = await db.collection("users").insertOne(newUser);
    console.log('[resultId]',result.insertedId.id);
    

    // Generate JWT token
    const token = jwt.sign({ id: result.insertedId.id, email: email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return res.status(201).json({ token });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
