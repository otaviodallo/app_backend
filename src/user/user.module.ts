import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from 'src/auth/auth.service';
import { AuthExceptions } from 'src/auth/authExceptions';

@Module({
  providers: [
    UserResolver, 
    UserService, 
    PrismaService, 
    AuthService,
    AuthExceptions
  ],
})
export class UserModule {}
