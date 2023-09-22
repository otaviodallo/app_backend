import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from './user.service';
import { AuthService } from 'src/auth/auth.service';

@Module({
    imports: [UserModule],
    providers: [
        PrismaService,
        UserService,
        AuthService
    ]
})
export class UserModule{}