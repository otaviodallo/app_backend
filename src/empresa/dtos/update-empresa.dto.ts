import { CreateEmpresaDto } from './create-empresa.dto';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEmpresaDto extends PartialType(CreateEmpresaDto) {
  @Field()
  id: number
  
  @Field()
  nome: string

  @Field()
  cnpj: string

  @Field()
  razaoSocial: string

  @Field()
  emailFinanceiro: string
}
