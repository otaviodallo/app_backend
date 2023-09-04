import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => Int)
  id: number;

  @Field()
  name: string

  @Field()
  quantity: string

  @Field()
  description: string

  @Field()
  price: string

  @Field()
  image: string

  @Field()
  idRestaurant: number

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date
}
