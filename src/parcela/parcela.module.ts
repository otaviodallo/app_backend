import { Module } from '@nestjs/common';
import { ParcelaService } from './parcela.service';
import { ParcelaResolver } from './parcela.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProjectService } from 'src/projeto/project.service';
import { EmpresaService } from 'src/empresa/empresa.service';

@Module({
  providers: [
    ParcelaService, 
    ParcelaResolver, 
    PrismaService,
    ProjectService,
    EmpresaService
  ],
})
export class ParcelaModule {}
