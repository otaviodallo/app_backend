/*
  Warnings:

  - You are about to drop the column `nomeDoUsuario` on the `Usuario` table. All the data in the column will be lost.
  - Added the required column `cpf` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "nomeDoUsuario",
ADD COLUMN     "cpf" TEXT NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL;
