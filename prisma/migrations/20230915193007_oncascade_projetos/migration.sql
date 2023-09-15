-- DropForeignKey
ALTER TABLE "Projeto" DROP CONSTRAINT "Projeto_empresaId_fkey";

-- DropForeignKey
ALTER TABLE "Projeto" DROP CONSTRAINT "Projeto_escolaId_fkey";

-- AddForeignKey
ALTER TABLE "Projeto" ADD CONSTRAINT "Projeto_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Projeto" ADD CONSTRAINT "Projeto_escolaId_fkey" FOREIGN KEY ("escolaId") REFERENCES "Escola"("id") ON DELETE CASCADE ON UPDATE CASCADE;
