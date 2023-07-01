import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  email: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  cpf: string;

  @Field({ nullable: true })
  cnpj: string;

  @Field({ nullable: true })
  image: string;

  @Field()
  password: string;
}
