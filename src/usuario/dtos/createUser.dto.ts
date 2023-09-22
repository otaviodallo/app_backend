import { Field } from "@nestjs/graphql";

export class CreateUserDto {
    @Field()
    email: string;
    
    @Field()
    nome: string;

    @Field()
    password: string;

    @Field()
    cpf: string;
}