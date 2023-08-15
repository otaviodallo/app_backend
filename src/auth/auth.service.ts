import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AuthExceptions } from './authExceptions';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

async function hashPassword(password: string){
    const scrypt = promisify(_scrypt);
    const salt = randomBytes(8).toString('hex');
    const hash = (await scrypt(password, salt, 32)) as Buffer;
    const hashedPassword = salt + '.' + hash.toString('hex');
    return hashedPassword
}

@Injectable()
export class AuthService {
    constructor(private usersService: UserService, private authExceptions: AuthExceptions) { }
    async signUp(email: string, name: string, cpf: string, cnpj: string, image: string, password: string) {
        // const exceptions = this.authExceptions.signUpExceptions(email, cpf, cnpj)
        // if(exceptions){
        //     return exceptions
        // }
        const hashedPassword = await hashPassword(password)
        const data = {
            email, name, cpf, cnpj, image, password: hashedPassword
        }
        return await this.usersService.create(data)
    }
}
