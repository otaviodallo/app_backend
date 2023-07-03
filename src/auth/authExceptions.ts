import { BadRequestException, Injectable } from "@nestjs/common"
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthExceptions {
    constructor(private usersService: UserService) { }
    async signUpExceptions(email: string, cpf: string, cnpj: string) {
        const userEmail = this.usersService.find(email)
        const userCpf = this.usersService.findCpf(cpf)
        const userCnpj = this.usersService.findCnpj(cnpj)

        if(userEmail){
            throw new BadRequestException('email in use')
        }
        if(userCpf){
            throw new BadRequestException('cpf in use')
        }
        if(userCnpj){
            throw new BadRequestException('cnpj in use')
        }
    }
}
