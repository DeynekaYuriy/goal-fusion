import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export interface AuthenticatedRequest extends NextApiRequest {
  user?: {
    id: string;
    email: string;
  };
}

export const authMiddleware = (handler: Function) => {
  return async (req: AuthenticatedRequest, res: NextApiResponse) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: "Authentication token missing" });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded as { id: string; email: string };
      return handler(req, res);
    } catch (error) {
      return res.status(401).json({ message: "Invalid token" });
    }
  };
};
