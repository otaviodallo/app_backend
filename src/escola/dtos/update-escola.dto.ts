import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateEscolaDto } from './create-escola.dto';

@InputType()
export class UpdateEscolaDto extends PartialType(CreateEscolaDto) {
    @Field()
    name: string;
}