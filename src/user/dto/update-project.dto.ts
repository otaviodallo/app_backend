import { CreateProjectDto } from './create-project.dto';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProjectDto extends PartialType(CreateProjectDto) {
  @Field()
  nome: string;

  @Field()
  contrato: string;

  @Field()
  valor: string;

  @Field()
  status: boolean;

  @Field()
  contaFinanceira: string;

  @Field()
  cr: number;

  @Field()
  parcelas: number

  @Field()
  coordenador: string

  @Field()
  empresaId: number

  @Field()
  escolaId: number
}
