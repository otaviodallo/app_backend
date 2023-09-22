import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDto } from "./dtos/createUser.dto";
import { AuthService } from "src/auth/auth.service";

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService, private readonly authService: AuthService) {}
    async create(createUserDto: CreateUserDto){
        const dataAtualLocal = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });  
        const data = {
            email: createUserDto.email,
            password: createUserDto.password,
            nome: createUserDto.nome,
            cpf: createUserDto.cpf,
            createdAt: dataAtualLocal,
            updatedAt: dataAtualLocal
        }
        const user = this.authService.signUp(data)
        return user
    }
}