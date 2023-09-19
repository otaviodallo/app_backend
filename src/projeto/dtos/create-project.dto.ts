import { IsNotEmpty } from '@nestjs/class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProjectDto {
  @Field()
  nome: string;

  @Field()
  @IsNotEmpty()
  contrato: string;

  @Field()
  @IsNotEmpty()
  cr: string;

  @Field()
  @IsNotEmpty()
  filial: number
  
  @Field()
  valor: number;

  @Field()
  parcelas: number


  @Field()
  coordenador: string

  @Field()
  empresaId: number

  @Field()
  escolaId: number
}
