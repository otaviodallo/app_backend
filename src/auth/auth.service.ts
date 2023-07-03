import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { hashPassword } from "./hashPassword"
import { AuthExceptions } from './authExceptions';

@Injectable()
export class AuthService {
    constructor(private usersService: UserService, private authExceptions: AuthExceptions) { }
    async signUp(email: string, name: string, cpf: string, cnpj: string, image: string, password: string) {
        const exceptions = this.authExceptions.signUpExceptions(email, cpf, cnpj)
        if(exceptions){
            return exceptions
        }
        const hashedPassword = await hashPassword(password)
        const data = {
            email, name, cpf, cnpj, image, password: hashedPassword
        }
        return await this.usersService.create(data)
    }
}
