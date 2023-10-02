/*
  Warnings:

  - You are about to drop the column `anoVencimento` on the `Parcela` table. All the data in the column will be lost.
  - You are about to drop the column `mesVencimento` on the `Parcela` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Parcela" DROP COLUMN "anoVencimento",
DROP COLUMN "mesVencimento";
