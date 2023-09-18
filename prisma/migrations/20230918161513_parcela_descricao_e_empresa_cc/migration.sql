/*
  Warnings:

  - Added the required column `cc` to the `Empresa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descricao` to the `Parcela` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `mesCompetencia` on the `Parcela` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `mesReferencia` on the `Parcela` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Empresa" ADD COLUMN     "cc" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Parcela" ADD COLUMN     "descricao" TEXT NOT NULL,
DROP COLUMN "mesCompetencia",
ADD COLUMN     "mesCompetencia" INTEGER NOT NULL,
DROP COLUMN "mesReferencia",
ADD COLUMN     "mesReferencia" INTEGER NOT NULL;
