import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class User{
    @Field(() => Int)
    id: number;

    @Field()
    nome: string;

    @Field()
    email: string;

    @Field()
    password: string;
}