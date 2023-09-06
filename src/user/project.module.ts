import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectResolver } from './project.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthExceptions } from 'src/auth/authExceptions';

@Module({
  providers: [
    ProjectService, 
    ProjectResolver, 
    PrismaService, 
    AuthExceptions
  ],
})
export class UserModule {}
