import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Empresa {
  @Field(() => Int)
  id: number;

  @Field()
  nome: string

  @Field()
  cnpj: string

  @Field()
  razaoSocial: string

  @Field()
  emailFinanceiro: string

  @Field()
  cc: string

  @Field()
  createdAt: string

  @Field()
  updatedAt: string
}