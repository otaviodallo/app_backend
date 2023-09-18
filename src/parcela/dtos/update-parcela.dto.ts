import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateParcelaDto{
    @Field()
    notaFiscal: string

    @Field()
    valor: number

    @Field()
    situacaoPgto: string

    @Field()
    liquidado: boolean

    @Field()
    diasPgtoComAtraso: number

    @Field()
    diasEmAtraso: number

    @Field()
    rps: number

    @Field()
    mesCompetencia: string

    @Field()
    mesReferencia: string

    @Field()
    contaFinanceira: number

    @Field()
    vencimento: string

    @Field()
    dataLiquidacao: string
}