import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from 'src/usuario/user.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
    providers: [
        AuthService, 
        UserService, 
        PrismaService
    ],
})
export class AuthModule {}
