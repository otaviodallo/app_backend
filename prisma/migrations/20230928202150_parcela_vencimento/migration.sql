-- AlterTable
ALTER TABLE "Parcela" ADD COLUMN     "anoVencimento" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "mesVencimento" INTEGER NOT NULL DEFAULT 1;
