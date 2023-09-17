import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateParcelaDto } from "./dtos/create-parcela.dto";

@Injectable()
export class ParcelaService{
    constructor(private prisma: PrismaService) { }
    async create(createParcelaDto: CreateParcelaDto) {
      const dataAtualLocal = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });      
        const data = {
          situacaoPgto: createParcelaDto.situacaoPgto,
          liquidado: createParcelaDto.liquidado,
          diasPgtoComAtraso: createParcelaDto.diasPgtoComAtraso,
          diasEmAtraso: createParcelaDto.diasEmAtraso,
          rps: createParcelaDto.rps,
          mesCompetencia: createParcelaDto.mesCompetencia,
          mesReferencia: createParcelaDto.mesReferencia,
          notaFiscal: createParcelaDto.notaFiscal,
          vencimento: createParcelaDto.vencimento,
          dataLiquidacao: createParcelaDto.dataLiquidacao,
          valor: createParcelaDto.valor,
          contaFinanceira: createParcelaDto.contaFinanceira,
          projetoId: createParcelaDto.projetoId,
          createdAt: dataAtualLocal,
          updatedAt: dataAtualLocal
        };
        return await this.prisma.parcela.create({ data });
      }
      findAll() {
        return this.prisma.parcela.findMany();
      }
      findBySituacaoPgto(situacaoPgto: string){
        return this.prisma.parcela.findMany({ where: {situacaoPgto} })
      }
      findByLiquidado(liquidado: boolean){
        return this.prisma.parcela.findMany({ where: {liquidado} }) 
      }
      findByNotaFiscal(notaFiscal: string) {
        return this.prisma.parcela.findMany({ where: {notaFiscal} })
      }
      findOne(projetoId: number) {
        return this.prisma.parcela.findMany({ where: { projetoId } })
      }
      remove(id: number) {
        return this.prisma.parcela.delete( { where: { id } } )
      }
}