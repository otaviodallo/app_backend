/*
  Warnings:

  - You are about to drop the column `username` on the `Usuario` table. All the data in the column will be lost.
  - Added the required column `createdAt` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "username",
ADD COLUMN     "createdAt" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TEXT NOT NULL;
