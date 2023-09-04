import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateOrderDto {
    @Field()
    id: number;

    @Field()
    idBuyer: number;

    @Field()
    idRestaurant: number;

    @Field()
    pending: boolean;
}