/*
  Warnings:

  - Added the required column `published` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `available` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `published` to the `SubCategory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "published" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "available" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "SubCategory" ADD COLUMN     "published" BOOLEAN NOT NULL;
