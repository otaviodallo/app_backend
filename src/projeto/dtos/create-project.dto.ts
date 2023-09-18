import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProjectDto {
  @Field()
  nome: string;

  @Field()
  contrato: string;

  @Field()
  cr: string;

  @Field()
  valor: number;

  @Field()
  parcelas: number

  @Field()
  filial: number

  @Field()
  coordenador: string

  @Field()
  empresaId: number

  @Field()
  escolaId: number
}
