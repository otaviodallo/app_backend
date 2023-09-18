import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Filial } from "../../projeto/enum/enumFilial";

@ObjectType()
export class Parcela {
    @Field(() => Int)
    id: number;

    @Field()
    status: string;

    @Field()
    liquidado: boolean;

    @Field()
    diasPgtoComAtraso: number;
    
    @Field()
    diasEmAtraso: number;

    @Field()
    rps: number;

    @Field()
    mesCompetencia: number;

    @Field()
    mesReferencia: number;

    @Field()
    notaFiscal: string;

    @Field()
    vencimento: string;

    @Field()
    dataLiquidacao: string;

    @Field()
    formaPagamento: string;

    @Field()
    valor: number;

    @Field()
    contaFinanceira: number;

    @Field()
    descricao: string

    @Field()
    filial: Filial

    @Field()
    projetoId: number;
}