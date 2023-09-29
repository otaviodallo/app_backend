import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateParcelaDto } from "./dtos/create-parcela.dto";
import { UpdateParcelaDto } from "./dtos/update-parcela.dto";
import { Projeto } from "src/projeto/entities/projeto.entity";

@Injectable()
export class ParcelaService{
    constructor(private prisma: PrismaService) { }
    async create(createParcelaDto: CreateParcelaDto) {
      const dataAtualLocal = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });      
        const data = {
          rps: createParcelaDto.rps,
          mesCompetencia: createParcelaDto.mesCompetencia,
          mesReferencia: createParcelaDto.mesReferencia,
          notaFiscal: createParcelaDto.notaFiscal,
          vencimento: createParcelaDto.vencimento,
          mesVencimento: createParcelaDto.mesVencimento,
          anoVencimento: createParcelaDto.anoVencimento,
          dataLiquidacao: createParcelaDto.dataLiquidacao,
          valor: createParcelaDto.valor,
          contaFinanceira: createParcelaDto.contaFinanceira,
          projetoId: createParcelaDto.projetoId,
          descricao: createParcelaDto.descricao,
          createdAt: dataAtualLocal,
          updatedAt: dataAtualLocal
        };
        return await this.prisma.parcela.create({ data });
      }
      findAll() {
        return this.prisma.parcela.findMany();
      }
      findByStatus(status: string){
        return this.prisma.parcela.findMany({ where: { status } })
      }
      findByLiquidado(liquidado: boolean){
        return this.prisma.parcela.findMany({ where: { liquidado: true } }) 
      }
      findByNotaFiscal(notaFiscal: string) {
        return this.prisma.parcela.findMany({ where: { notaFiscal } })
      }
      findOne(projetoId: number) {
        return this.prisma.parcela.findMany({ where: { projetoId } })
      }
      findByMesCompetencia(mes: number){
        return this.prisma.parcela.findMany({ where: { mesCompetencia: mes } })
      }
      findByMesReferencia(mes: number){
        return this.prisma.parcela.findMany({ where: { mesReferencia: mes } })
      }
      findAllByProjeto(projetoId: number){
        return this.prisma.parcela.findMany({ where: { projetoId: projetoId } })
      }
      async findParcelasByProjetos(projetos: Projeto[]) {
        const projetoIds = projetos.map((projeto) => projeto.id);
        return this.prisma.parcela.findMany({
          where: {
            projetoId: {
              in: projetoIds,
            },
          },
        });
      }
      update(updateParcelaDto: UpdateParcelaDto) {
        const dataAtualLocal = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });     
        return this.prisma.parcela.update({
          where: { id: updateParcelaDto.id },
          data: { 
            notaFiscal: updateParcelaDto.notaFiscal, 
            valor: updateParcelaDto.valor, 
            liquidado: updateParcelaDto.liquidado, 
            diasPgtoComAtraso: updateParcelaDto.diasPgtoComAtraso, 
            diasEmAtraso: updateParcelaDto.diasEmAtraso, 
            rps: updateParcelaDto.rps, 
            status: updateParcelaDto.status,
            mesCompetencia: updateParcelaDto.mesCompetencia, 
            mesReferencia: updateParcelaDto.mesReferencia, 
            contaFinanceira: updateParcelaDto.contaFinanceira,
            vencimento: updateParcelaDto.vencimento,
            dataLiquidacao: updateParcelaDto.dataLiquidacao,
            updatedAt: dataAtualLocal
          }
        })
      }
      remove(id: number) {
        return this.prisma.parcela.delete( { where: { id } } )
      }
}