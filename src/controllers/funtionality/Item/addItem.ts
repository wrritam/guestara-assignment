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

export const addItemUnderSubCategory = async (
  req: CustomRequest,
  res: Response
) => {
  const {
    name,
    image,
    description,
    baseAmount,
    discount,
    taxApplicability,
    taxNumber,
  } = req.body;

  const subCategoryId = Number(req.params.subCategoryId);
  const categoryId = Number(req.params.categoryId);

  const user = await prisma.user.findUnique({
    where: {
      email: req.user?.email,
    },
  });

  if (user) {
    if (user.is_verified) {
      const addItem = await prisma.item.create({
        data: {
          name: name,
          image: image,
          description: description,
          baseAmount: baseAmount,
          discount: discount,
          categoryId: categoryId,
          subCategoryId: subCategoryId,
          taxApplicability: taxApplicability,
          taxNumber: taxNumber,
          totalAmount: Number(baseAmount - discount),
          addedById: user.id,
        },
      });

      if (addItem) {
        res.json({ addItem });
      } else {
        res.status(404).json({ message: "No item found" });
      }
    } else {
      res.status(403).json({ message: "Please verify your email address" });
    }
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

export const addItemUnderCategory = async (
  req: CustomRequest,
  res: Response
) => {
  const {
    name,
    image,
    description,
    baseAmount,
    discount,
    taxApplicability,
    taxNumber,
  } = req.body;
  const categoryId = Number(req.params.categoryId);

  const user = await prisma.user.findUnique({
    where: {
      email: req.user?.email,
    },
  });

  if (user) {
    if (user.is_verified) {
      const addItem = await prisma.item.create({
        data: {
          name: name,
          image: image,
          description: description,
          baseAmount: baseAmount,
          discount: discount,
          categoryId: categoryId,
          taxApplicability: taxApplicability,
          taxNumber: taxNumber,
          totalAmount: Number(baseAmount - discount),
          addedById: user.id,
        },
      });

      if (addItem) {
        res.json({ addItem });
      } else {
        res.status(404).json({ message: "No item found" });
      }
    } else {
      res.status(403).json({ message: "Please verify your email address" });
    }
  } else {
    res.status(404).json({ message: "User not found" });
  }
};
