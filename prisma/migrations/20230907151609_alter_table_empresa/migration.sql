/*
  Warnings:

  - A unique constraint covering the columns `[cnpj]` on the table `Empresa` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[razaoSocial]` on the table `Empresa` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[emailFinanceiro]` on the table `Empresa` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Empresa_cnpj_key" ON "Empresa"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "Empresa_razaoSocial_key" ON "Empresa"("razaoSocial");

-- CreateIndex
CREATE UNIQUE INDEX "Empresa_emailFinanceiro_key" ON "Empresa"("emailFinanceiro");
