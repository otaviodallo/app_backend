import { Injectable } from '@nestjs/common';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { CreateUserDto } from 'src/usuario/dtos/createUser.dto';
import { UserService } from 'src/usuario/user.service';
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
    constructor(private readonly usersService: UserService) { }
    async signUp(createUserDto: CreateUserDto) {
        const hashedPassword = await hashPassword(createUserDto.password)
        const data = {
            email: createUserDto.email,
            password: hashedPassword,
            nome: createUserDto.nome,
            cpf: createUserDto.cpf
        }
        return await this.usersService.create(data)
    }
}
