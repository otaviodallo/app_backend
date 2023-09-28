import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateEmpresaDto } from "./dtos/create-empresa.dto";
import { UpdateEmpresaDto } from "./dtos/update-empresa.dto";

@Injectable()
export class EmpresaService{
    constructor(private prisma: PrismaService) { }
    async create(createEmpresaDto: CreateEmpresaDto) {
      const dataAtualLocal = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
        const data = {
          nome: createEmpresaDto.nome,
          cnpj: createEmpresaDto.cnpj,
          razaoSocial: createEmpresaDto.razaoSocial,
          emailFinanceiro: createEmpresaDto.emailFinanceiro,
          cc: createEmpresaDto.cc,
          createdAt: dataAtualLocal,
          updatedAt: dataAtualLocal
        };
        return await this.prisma.empresa.create({ data });
      }
      findAll() {
        return this.prisma.empresa.findMany();
      }
      findByCnpj(cnpj: string){
        return this.prisma.empresa.findUnique({ where: {cnpj} })
      }
      findByRazaoSocial(razaoSocial: string){
        return this.prisma.empresa.findUnique({ where: {razaoSocial} }) 
      }
      findOne(id: number) {
        return this.prisma.empresa.findUnique({ where: {id} })
      }
      update(updateEmpresaDto: UpdateEmpresaDto) {
        return this.prisma.empresa.update({
          where: { id: updateEmpresaDto.id },
          data: { nome: updateEmpresaDto.nome, cnpj: updateEmpresaDto.cnpj, razaoSocial: updateEmpresaDto.razaoSocial, emailFinanceiro: updateEmpresaDto.emailFinanceiro }
        })
      }
      remove(id: number) {
        return this.prisma.projeto.delete( { where: { id } } )
      }
}