import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Escola {
    @Field(() => Int)
    id: number;

    @Field()
    nome: string
}