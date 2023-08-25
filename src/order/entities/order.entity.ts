import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Order{
    @Field(() => Int)
    id: number;

    @Field()
    idBuyer: number;
    
    @Field()
    idRestaurant: number;

    @Field()
    createdAt: Date

    @Field()
    updatedAt: Date
}
