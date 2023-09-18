import { CreateProjectDto } from './create-project.dto';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProjectDto extends PartialType(CreateProjectDto) {
  @Field()
  id: number

  @Field()
  nome: string;

  @Field()
  contrato: string;

  @Field()
  valor: number;

  @Field()
  status: string;

  @Field()
  cr: string;

  @Field()
  parcelas: number

  @Field()
  coordenador: string
}
