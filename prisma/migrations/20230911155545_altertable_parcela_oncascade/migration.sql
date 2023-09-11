-- DropForeignKey
ALTER TABLE "Parcela" DROP CONSTRAINT "Parcela_projetoId_fkey";

-- AddForeignKey
ALTER TABLE "Parcela" ADD CONSTRAINT "Parcela_projetoId_fkey" FOREIGN KEY ("projetoId") REFERENCES "Projeto"("id") ON DELETE CASCADE ON UPDATE CASCADE;
