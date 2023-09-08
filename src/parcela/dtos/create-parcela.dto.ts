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