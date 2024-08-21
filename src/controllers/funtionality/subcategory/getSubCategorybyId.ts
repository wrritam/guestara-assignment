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

export const getSubCategorybyId = async (req: CustomRequest, res: Response) => {
  const subCategoryId = parseInt(req.params.subCategoryId);

  const user = await prisma.user.findUnique({
    where: {
      email: req.user?.email,
    },
  });

  if (user) {
    if (user.is_verified) {
      const subCategory = await prisma.subCategory.findUnique({
        where: {
          id: subCategoryId,
        },
      });

      if (subCategory) {
        res.json({ subCategory });
      } else {
        res.status(404).json({ message: "SubCategory not found" });
      }
    } else {
      res.status(403).json({ message: "Please verify your email address" });
    }
  } else {
    res.status(404).json({ message: "User not found" });
  }
};
