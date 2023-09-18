import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dtos/create-project.dto';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateProjectDto } from './dtos/update-project.dto';
import { ParcelaService } from 'src/parcela/parcela.service';
import { CreateParcelaDto } from 'src/parcela/dtos/create-parcela.dto';
import { formaPagamento } from 'src/parcela/enum/enumPagamento';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService, private parcelaService: ParcelaService) { }
  async create(createProjectDto: CreateProjectDto) {
    const dataAtualLocal = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    const data = {
      nome: createProjectDto.nome,
      contrato: createProjectDto.contrato,
      valor: createProjectDto.valor,
      cr: createProjectDto.cr,
      parcelas: createProjectDto.parcelas,
      coordenador: createProjectDto.coordenador,
      filial: createProjectDto.filial,
      empresaId: createProjectDto.empresaId,
      escolaId: createProjectDto.escolaId,
      createdAt: dataAtualLocal,
      updatedAt: dataAtualLocal
    };
    const project = await this.prisma.projeto.create({ data });
    const parcelas = createProjectDto.parcelas as any;
    const valor = createProjectDto.valor as any;
    const novoValor = valor / parcelas;

    const parcelaData: CreateParcelaDto = {
          rps: 23,
          mesCompetencia: 2,
          mesReferencia: 5,
          notaFiscal: '',
          vencimento: '',
          dataLiquidacao: '',
          valor: novoValor,
          contaFinanceira: 53,
          descricao: '',
          projetoId: project.id,
          formaPagamento: formaPagamento.BOLETO,
          createdAt: dataAtualLocal,
          updatedAt: dataAtualLocal
    };
    for (let i = 1; i <= parcelas; i++) {
      await this.parcelaService.create(parcelaData)
    }
    return project
  }
  findAll() {
    return this.prisma.projeto.findMany();
  }
  findByContrato(contrato: string){
    return this.prisma.projeto.findUnique({ where: {contrato} })
  }
  findByCr(cr: string){
    return this.prisma.projeto.findUnique({ where: {cr} }) 
  }
  findOne(id: number) {
    return this.prisma.projeto.findUnique({ where: {id} })
  }
  findAllByEscola(escolaId: number){
    return this.prisma.projeto.findMany( { where: { escolaId: escolaId } })
  }
  update(id: number, updateProjectDto: UpdateProjectDto) {
    return this.prisma.projeto.update({
      where: { id: updateProjectDto.id },
      data: { 
        nome: updateProjectDto.nome, 
        contrato: updateProjectDto.contrato, 
        valor: updateProjectDto.valor, 
        cr: updateProjectDto.cr, 
        parcelas: updateProjectDto.parcelas, 
        coordenador: updateProjectDto.coordenador,
      }
    })
  }
  remove(id: number) {
    return this.prisma.projeto.delete( { where: { id } } )
  }
}
