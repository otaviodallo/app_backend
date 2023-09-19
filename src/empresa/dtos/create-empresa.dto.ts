import { IsNotEmpty } from "@nestjs/class-validator";
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateEmpresaDto {
    @Field()
    nome: string
  
    @IsNotEmpty()
    @Field()
    cnpj: string
  
    @IsNotEmpty()
    @Field()
    razaoSocial: string
  
    @IsNotEmpty()
    @Field()
    emailFinanceiro: string

    @Field()
    cc: string
}