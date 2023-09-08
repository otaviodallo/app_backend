import { Module } from '@nestjs/common';
import { ParcelaService } from './parcela.service';
import { ParcelaResolver } from './parcela.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [
    ParcelaService, 
    ParcelaResolver, 
    PrismaService, 
  ],
})
export class ParcelaModule {}
