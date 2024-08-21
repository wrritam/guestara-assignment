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

export const getAllItems = async (req: CustomRequest, res: Response) => {
  const user = await prisma.user.findUnique({
    where: {
      email: req.user?.email,
    },
  });

  if (user) {
    if (user.is_verified) {
      const items = await prisma.item.findMany();

      if (items) {
        res.json({ items });
      } else {
        res.status(404).json({ message: "No items found" });
      }
    } else {
      res.status(403).json({ message: "Please verify your email address" });
    }
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

export const getItemsUnderCategory = async (
  req: CustomRequest,
  res: Response
) => {
  const categoryId = Number(req.params.categoryId);

  const user = await prisma.user.findUnique({
    where: {
      email: req.user?.email,
    },
  });

  if (user) {
    if (user.is_verified) {
      const items = await prisma.item.findMany({
        where: {
          categoryId: categoryId,
        },
      });

      if (items) {
        res.json({ items });
      } else {
        res.status(404).json({ message: "No items found" });
      }
    }
  }
};

export const getItemsUnderSubCategory = async (
  req: CustomRequest,
  res: Response
) => {
  const subCategoryId = Number(req.params.subCategoryId);

  const user = await prisma.user.findUnique({
    where: {
      email: req.user?.email,
    },
  });

  if (user) {
    if (user.is_verified) {
      const items = await prisma.item.findMany({
        where: {
          subCategoryId: subCategoryId,
        },
      });

      if (items) {
        res.json({ items });
      } else {
        res.status(404).json({ message: "No items found" });
      }
    }
  }
};

export const getItemById = async (req: CustomRequest, res: Response) => {
  const itemId = Number(req.params.itemId);

  const user = await prisma.user.findUnique({
    where: {
      email: req.user?.email,
    },
  });

  if (user) {
    if (user.is_verified) {
      const item = await prisma.item.findUnique({
        where: {
          id: itemId,
        },
      });

      if (item) {
        res.json({ item });
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
