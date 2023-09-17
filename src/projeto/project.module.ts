import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectResolver } from './project.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { ParcelaService } from 'src/parcela/parcela.service';
import { EscolaService } from 'src/escola/escola.service';
import { EmpresaService } from 'src/empresa/empresa.service';

@Module({
  providers: [
    ProjectService, 
    ProjectResolver, 
    PrismaService,
    ParcelaService,
    EscolaService,
    EmpresaService
  ],
})
export class ProjectModule {}
