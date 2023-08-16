import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }
  async create(createUserDto: CreateUserDto) {
    const data = {
      name: createUserDto.name,
      email: createUserDto.email,
      cpf: createUserDto.cpf,
      cnpj: createUserDto.cnpj,
      image: createUserDto.image,
      password: createUserDto.password,
    };
    return await this.prisma.user.create({ data });
  }
  findAll() {
    return this.prisma.user.findMany();
  }
  find(email: string){
    return this.prisma.user.findUnique({ where: {email} })
  }
  findCpf(cpf: string){
    return this.prisma.user.findUnique({ where: {cpf} }) 
  }
  findCnpj(cnpj: string){
    return this.prisma.user.findUnique({ where: {cnpj} }) 
  }
  findOne(id: number) {
    return this.prisma.user.findUnique({ where: {id} })
  }
  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: { name: updateUserDto.name, email: updateUserDto.email, cpf: updateUserDto.cpf }
    })
  }
  remove(id: number) {
    return this.prisma.user.delete( { where: { id } } )
  }
}
