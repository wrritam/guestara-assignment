import { Request, Response } from "express";
import prisma from "../../db/db.config";

interface CustomRequest extends Request {
  user?: {
    id: number;
    email: string;
    name: string | null;
    password: string;
    is_verified: boolean;
    otp: number | null;
    last_login: string | null;
    createdAt: string;
    updatedAt: string | null;
  };
}

export const getAllCategories = async (req: CustomRequest, res: Response) => {
  const user = await prisma.user.findUnique({
    where: {
      email: req.user?.email,
    },
  });

  if (user) {
    if (user.is_verified) {
      const categories = await prisma.category.findMany();
      res.json({ categories });
    } else {
      res.status(403).json({ message: "Please verify your email address" });
    }
  } else {
    res.status(404).json({ message: "User not found" });
  }
};
