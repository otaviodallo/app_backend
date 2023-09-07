import { Module } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { EmpresaResolver } from './empresa.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [
    EmpresaService, 
    EmpresaResolver, 
    PrismaService, 
  ],
})
export class EmpresaModule {}
