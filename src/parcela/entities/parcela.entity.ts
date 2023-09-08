import { Field, Int, ObjectType } from "@nestjs/graphql";
import { UnionMetadata } from "@nestjs/graphql/dist/schema-builder/metadata";

@ObjectType()
export class Parcela {
    @Field(() => Int)
    id: number;

    @Field()
    situacaoPgto: string;

    @Field()
    liquidado: boolean;

    @Field()
    diasPgtoComAtraso: number;
    
    @Field()
    diasEmAtraso: number;

    @Field()
    rps: string;

    @Field()
    mesCompetencia: string;

    @Field()
    mesReferencia: string;

    @Field()
    notaFiscal: string;

    @Field()
    vencimento: string;

    @Field()
    dataLiquidacao: string;

    @Field()
    valor: string;

    @Field()
    contaFinanceira: string;

    @Field()
    projetoId: number;
}