import { Module, forwardRef } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from './user.service';
import { AuthService } from 'src/auth/auth.service';

@Module({
    providers: [
        PrismaService,
        UserService,
        AuthService
    ]
})
export class UserModule {}