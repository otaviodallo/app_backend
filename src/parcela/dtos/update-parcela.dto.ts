import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateParcelaDto{
    @Field()
    id: number

    @Field()
    notaFiscal: string

    @Field()
    valor: number

    @Field()
    status: string

    @Field()
    liquidado: boolean

    @Field()
    diasPgtoComAtraso: number

    @Field()
    diasEmAtraso: number

    @Field()
    rps: number

    @Field()
    mesCompetencia: number

    @Field()
    mesReferencia: number
    
    @Field()
    formaPagamento: string

    @Field()
    contaFinanceira: number

    @Field()
    vencimento: string

    @Field()
    dataLiquidacao: string
}