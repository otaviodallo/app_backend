import { Field, InputType } from "@nestjs/graphql";
import { Status } from "../enum/enumStatus";
import { Filial } from "src/projeto/enum/enumFilial";

@InputType()
export class CreateParcelaDto {
    @Field()
    rps: number;

    @Field()
    mesCompetencia: number;

    @Field()
    mesReferencia: number;

    @Field()
    mesVencimento: number;

    @Field()
    anoVencimento: number;

    @Field()
    notaFiscal: string;

    @Field()
    vencimento: string;

    @Field()
    dataLiquidacao: string;

    @Field()
    valor: number;

    @Field()
    status: string

    @Field()
    contaFinanceira: number;
    
    @Field()
    descricao: string

    @Field()
    formaPagamento: string

    @Field()
    projetoId: number;

    @Field()
    createdAt: string;

    @Field()
    updatedAt: string;
}