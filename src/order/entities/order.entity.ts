import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Order{
    @Field(() => Int)
    id: number;

    @Field()
    idBuyer: number;

    @Field()
    idRestaurant: number;

    @Field()
    pending: boolean;
}