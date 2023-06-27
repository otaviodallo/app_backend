/*
  Warnings:

  - Added the required column `balance` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cnpj` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpf` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isAdmin` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "balance" INT DEFAULT 0,
ADD COLUMN     "cnpj" TEXT DEFAULT NULL,
ADD COLUMN     "cpf" TEXT DEFAULT NULL,
ADD COLUMN     "image" TEXT DEFAULT NULL,
ADD COLUMN     "isAdmin" BOOLEAN DEFAULT NULL,
ADD COLUMN     "password" TEXT DEFAULT NULL;
