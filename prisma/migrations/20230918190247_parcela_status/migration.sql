/*
  Warnings:

  - You are about to drop the column `situacaoPgto` on the `Parcela` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Parcela" DROP COLUMN "situacaoPgto",
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'A faturar';
