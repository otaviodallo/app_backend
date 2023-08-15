import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/updated-product.dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}
  async create(createProductDto: CreateProductDto) {
    const data = {
      name: createProductDto.name,
      description: createProductDto.description,
      quantity: createProductDto.quantity,
      price: createProductDto.price,
      image: createProductDto.image,
      idRestaurant: createProductDto.idRestaurant
    };
    return await this.prisma.product.create({ data });
  }

  findAll() {
    return this.prisma.product.findMany();
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({ where: {id} })
  }

  update(id: number, updateUserInput: UpdateProductDto) {
    return this.prisma.product.update({
      where: { id },
      data: { name: updateUserInput.name }
    })
  }

  remove(id: number) {
    return this.prisma.product.delete( { where: { id } } )
  }
}