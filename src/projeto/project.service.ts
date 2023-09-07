import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dtos/create-project.dto';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateProjectDto } from './dtos/update-project.dto';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) { }
  async create(createProjectDto: CreateProjectDto) {
    const data = {
      nome: createProjectDto.nome,
      contrato: createProjectDto.contrato,
      valor: createProjectDto.valor,
      status: createProjectDto.status,
      cr: createProjectDto.cr,
      parcelas: createProjectDto.parcelas,
      coordenador: createProjectDto.coordenador,
      empresaId: createProjectDto.empresaId,
      escolaId: createProjectDto.escolaId
    };
    return await this.prisma.projeto.create({ data });
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
