/*
  Warnings:

  - Changed the type of `valor` on the `Parcela` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `contaFinanceira` on the `Parcela` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `rps` on the `Parcela` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Parcela" DROP COLUMN "valor",
ADD COLUMN     "valor" INTEGER NOT NULL,
DROP COLUMN "contaFinanceira",
ADD COLUMN     "contaFinanceira" INTEGER NOT NULL,
DROP COLUMN "rps",
ADD COLUMN     "rps" INTEGER NOT NULL;
