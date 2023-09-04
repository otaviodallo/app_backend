import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrderResolver } from './order.resolver';
import { OrderService } from './order.service';

@Module({
  providers: [
    OrderResolver,
    PrismaService, 
    OrderService
  ],
})
export class OrderModule {}
