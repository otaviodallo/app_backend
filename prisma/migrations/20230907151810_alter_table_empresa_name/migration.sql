/*
  Warnings:

  - You are about to drop the column `name` on the `Empresa` table. All the data in the column will be lost.
  - Added the required column `nome` to the `Empresa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Empresa" DROP COLUMN "name",
ADD COLUMN     "nome" TEXT NOT NULL;
