/*
  Warnings:

  - A unique constraint covering the columns `[cr]` on the table `Projeto` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Projeto_cr_key" ON "Projeto"("cr");
