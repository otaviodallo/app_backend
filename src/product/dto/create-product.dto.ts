import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateProductDto {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  quantity: number;

  @Field()
  price: number;

  @Field()
  image: string;

  @Field()
  idRestaurant: number;
}