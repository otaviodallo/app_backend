import { CreateProductDto } from './create-product.dto';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductDto extends PartialType(CreateProductDto) {
  @Field(() => Int)
  id: number;
  
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  quantity: number;

  @Field()
  image: string
}
