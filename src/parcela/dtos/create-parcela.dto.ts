import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateParcelaDto {
    @Field()
    situacaoPgto: string;

    @Field()
    liquidado: boolean;

    @Field()
    diasPgtoComAtraso: number;
    
    @Field()
    diasEmAtraso: number;

    @Field()
    rps: number;

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
    valor: number;

    @Field()
    contaFinanceira: number;

    @Field()
    projetoId: number;
}