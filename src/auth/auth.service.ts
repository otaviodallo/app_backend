import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { hashPassword } from "./hashPassword"


@Injectable()
export class AuthService {
    constructor(private usersService: UserService) {}
    async signUp(email: string, name:string, cpf: string, cnpj: string, image: string, password: string){
        const hashedPassword = await hashPassword(password)
        const data = {
            email, name, cpf, cnpj, image, password: hashedPassword
        }
        return await this.usersService.create(data)
    }
}
