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
