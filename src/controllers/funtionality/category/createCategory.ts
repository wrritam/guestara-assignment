import { Request, Response } from "express";
import prisma from "../../../db/db.config";

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

export const createCategory = async (req: CustomRequest, res: Response) => {
  const { name, image, description, taxApplicability, taxNumber, taxType } =
    req.body;
  const user = await prisma.user.findUnique({
    where: {
      email: req.user?.email,
    },
  });

  if (user) {
    if (user.is_verified) {
      const item = await prisma.category.create({
        data: {
          name,
          image,
          description,
          taxApplicability,
          taxNumber,
          taxType,
          createdBy: {
            connect: {
              id: user.id,
            },
          },
        },
      });

      res.json({ message: "Category created successfully", item });
    } else {
      res.status(403).json({ message: "Please verify your email address" });
    }
  } else {
    res.status(404).json({ message: "User not found" });
  }
};
