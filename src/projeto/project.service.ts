import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dtos/create-project.dto';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateProjectDto } from './dtos/update-project.dto';
import { ParcelaService } from 'src/parcela/parcela.service';
import { CreateParcelaDto } from 'src/parcela/dtos/create-parcela.dto';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService, private parcelaService: ParcelaService) { }
  async create(createProjectDto: CreateProjectDto) {
    const dataAtualLocal = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    const data = {
      nome: createProjectDto.nome,
      contrato: createProjectDto.contrato,
      valor: createProjectDto.valor,
      status: createProjectDto.status,
      cr: createProjectDto.cr,
      parcelas: createProjectDto.parcelas,
      coordenador: createProjectDto.coordenador,
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
          situacaoPgto: 'pendente',
          liquidado: false,
          diasPgtoComAtraso: 0,
          diasEmAtraso: 0,
          rps: 23,
          mesCompetencia: '02',
          mesReferencia: '05',
          notaFiscal: '321356',
          vencimento: '23/05/2025',
          dataLiquidacao: '',
          valor: novoValor,
          contaFinanceira: 53,
          projetoId: project.id,
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
  update(id: number, updateProjectDto: UpdateProjectDto) {
    return this.prisma.projeto.updateMany({
      where: { id },
      data: { nome: updateProjectDto.nome, contrato: updateProjectDto.contrato, valor: updateProjectDto.valor, cr: updateProjectDto.cr, parcelas: updateProjectDto.parcelas, coordenador: updateProjectDto.coordenador}
    })
  }
  remove(id: number) {
    return this.prisma.projeto.delete( { where: { id } } )
  }
}
