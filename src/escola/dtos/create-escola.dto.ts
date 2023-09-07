import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateEscolaDto {
    @Field()
    nome: string
}