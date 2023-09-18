import { Module } from '@nestjs/common';
import { EscolaService } from './escola.service';
import { EscolaResolver } from './escola.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProjectService } from 'src/projeto/project.service';
import { ParcelaService } from 'src/parcela/parcela.service';

@Module({
  providers: [
    EscolaService, 
    EscolaResolver, 
    PrismaService, 
    ProjectService,
    ParcelaService
  ],
})
export class EscolaModule {}
