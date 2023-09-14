import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEscolaDto } from './dtos/create-escola.dto';
import { UpdateEscolaDto } from './dtos/update-escola.dto';

@Injectable()
export class EscolaService {
  constructor(private prisma: PrismaService) { }
  async create(createEscolaDto: CreateEscolaDto) {
    const data = {
      nome: createEscolaDto.nome,
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
