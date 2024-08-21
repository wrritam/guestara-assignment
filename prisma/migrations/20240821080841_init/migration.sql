-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_createdById_fkey";

-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_addedById_fkey";

-- DropForeignKey
ALTER TABLE "SubCategory" DROP CONSTRAINT "SubCategory_createdById_fkey";
