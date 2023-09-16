import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateEmpresaDto {
    @Field()
    nome: string
  
    @Field()
    cnpj: string
  
    @Field()
    razaoSocial: string
  
    @Field()
    emailFinanceiro: string

    @Field()
    createdAt: string

    @Field()
    updatedAt: string
}