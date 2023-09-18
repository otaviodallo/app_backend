import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Filial } from '../enum/enumFilial';

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
  cr: string

  @Field()
  parcelas: number

  @Field()
  coordenador: string

  @Field()
  filial: Filial

  @Field()
  empresaId: number

  @Field()
  escolaId: number

  @Field()
  createdAt: string

  @Field()
  updatedAt: string
}
