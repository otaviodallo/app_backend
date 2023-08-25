import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class OrderProduct{
    @Field(() => Int)
    id: number;

    @Field()
    idProduct: number;
    
    @Field()
    idOrder: number;

    @Field()
    quantity: number;
}
