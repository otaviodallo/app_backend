import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEscolaDto } from './dtos/create-escola.dto';
import { UpdateEscolaDto } from './dtos/update-escola.dto';
import { Parent, ResolveField } from '@nestjs/graphql';
import { Parcela } from 'src/parcela/entities/parcela.entity';
import { ProjectService } from 'src/projeto/project.service';
import { ParcelaService } from 'src/parcela/parcela.service';
import { Escola } from '@prisma/client';
const { DateTime } = require('luxon');


@Injectable()
export class EscolaService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly projectService: ProjectService,
    private readonly parcelaService: ParcelaService
    ) { }
  async create(createEscolaDto: CreateEscolaDto) {
    const dataAtualLocal = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    const data = {
      nome: createEscolaDto.nome,
      createdAt: dataAtualLocal,
      updatedAt: dataAtualLocal
    };
    return await this.prisma.escola.create({ data });
  }
  findAll() {
    return this.prisma.escola.findMany();
  }
  findOne(id: number) {
    return this.prisma.escola.findUnique({ where: {id} })
  }
  update(id: number, updateEscolaDto: UpdateEscolaDto) {
    return this.prisma.escola.updateMany({
      where: { id },
      data: { nome: updateEscolaDto.nome }
    })
  }
  remove(id: number) {
    return this.prisma.escola.delete( { where: { id } } )
  }
}
