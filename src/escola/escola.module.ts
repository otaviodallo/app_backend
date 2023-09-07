import { Module } from '@nestjs/common';
import { EscolaService } from './escola.service';
import { EscolaResolver } from './escola.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [
    EscolaService, 
    EscolaResolver, 
    PrismaService, 
  ],
})
export class EscolaModule {}
