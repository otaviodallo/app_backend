import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class ProductDto {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  quantity: string;

  @Field({ nullable: true })
  image: string;
}