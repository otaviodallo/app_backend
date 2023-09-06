/*
  Warnings:

  - Added the required column `parcelas` to the `Projeto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Projeto" ADD COLUMN     "parcelas" TEXT NOT NULL;
