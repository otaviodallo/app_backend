import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  name: string

  @Field()
  email: string

  @Field()
  cpf: string

  @Field()
  cnpj: string

  @Field()
  password: string

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date
}
