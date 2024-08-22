/*
  Warnings:

  - You are about to drop the column `published` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `available` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `SubCategory` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "published",
ALTER COLUMN "taxApplicability" SET DEFAULT true;

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "available";

-- AlterTable
ALTER TABLE "SubCategory" DROP COLUMN "published",
ALTER COLUMN "taxApplicability" SET DEFAULT true;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "createdAt" DROP DEFAULT,
ALTER COLUMN "createdAt" SET DATA TYPE TEXT,
ALTER COLUMN "updatedAt" SET DATA TYPE TEXT;
