import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Restaurant {
  @Field(() => Int)
  id: number;

  @Field()
  name: string

  @Field()
  email: string

  @Field()
  cnpj: string

  @Field()
  adress: string

  @Field()
  password: string

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date
}