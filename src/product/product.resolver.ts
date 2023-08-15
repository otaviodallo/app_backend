import { Product } from "./entities/product.entity";
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductService } from "./product.service";

@Resolver(() => Product)
export class ProductResolver{
    constructor(
        private readonly productService: ProductService
    ) {}
}