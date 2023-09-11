import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectResolver } from './project.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { ParcelaService } from 'src/parcela/parcela.service';

@Module({
  providers: [
    ProjectService, 
    ProjectResolver, 
    PrismaService,
    ParcelaService
  ],
})
export class ProjectModule {}
