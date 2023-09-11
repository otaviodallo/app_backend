import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Projeto {
  @Field(() => Int)
  id: number;

  @Field()
  nome: string

  @Field()
  contrato: string

  @Field()
  valor: number

  @Field()
  status: string

  @Field()
  cr: string

  @Field()
  parcelas: number

  @Field()
  coordenador: string

  @Field()
  empresaId: number

  @Field()
  escolaId: number
}
