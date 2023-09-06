import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProjectDto {
  @Field()
  nome: string;

  @Field()
  contrato: string;

  @Field()
  cr: number;

  @Field()
  valor: string;

  @Field()
  status: string;

  @Field()
  parcelas: number

  @Field()
  coordenador: string

  @Field()
  empresaId: number

  @Field()
  escolaId: number
}
