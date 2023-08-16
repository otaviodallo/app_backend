import { Product } from "./entities/product.entity";
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";

@Resolver(() => Product)
export class ProductResolver {
    constructor(
        private readonly productService: ProductService
    ) {}

    @Mutation(() => Product)
    createProduct(@Args('createProductDto') body: CreateProductDto) {
        const product = this.productService.create(body);
        return product;
    }

    @Query(() => [Product], { name: 'products' }) 
    findAll() {
        return this.productService.findAll();
    }

    @Query(() => Product, { name: 'product' })
    findOne(@Args('id', { type: () => Int }) id: number) {
        return this.productService.findOne(id);
    }

    @Mutation(() => Product)
    updateProduct(@Args('updateProductDto') updateProductDto: UpdateProductDto) {
        return this.productService.update(updateProductDto.id, updateProductDto);
    }

    @Mutation(() => Product)
    removeProduct(@Args('id', { type: () => Int }) id: number) {
        return this.productService.remove(id);
    }
}