/*
  Warnings:

  - You are about to drop the column `RPS` on the `Parcela` table. All the data in the column will be lost.
  - Added the required column `rps` to the `Parcela` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Parcela" DROP COLUMN "RPS",
ADD COLUMN     "rps" TEXT NOT NULL;
