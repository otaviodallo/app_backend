/*
  Warnings:

  - The `filial` column on the `Projeto` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Projeto" DROP COLUMN "filial",
ADD COLUMN     "filial" INTEGER NOT NULL DEFAULT 3;
