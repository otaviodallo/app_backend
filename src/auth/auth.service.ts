import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

@Injectable()
export class AuthService {
    constructor(private usersService: UserService) {}

    async signUp(email: string, name:string, cpf: string, cnpj: string, block: string, image: string, password: string){
        const scrypt = promisify(_scrypt);
        const users = this.usersService.find(email)
        if(!users){
            throw new BadRequestException('email not found')
        }

        const salt = randomBytes(8).toString('hex');
        const hash = (await scrypt(password, salt, 32)) as Buffer;
        const hashedPassword = salt + '.' + hash.toString('hex');

        const data = {
            email, name, cpf, cnpj, block, image, hashedPassword
        }

        // const user = this.usersService.create(data)

    }
}
