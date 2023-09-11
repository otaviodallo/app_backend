import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Parcela } from './entities/parcela.entity';
import { CreateParcelaDto } from './dtos/create-parcela.dto';
import { ParcelaService } from './parcela.service';

@Resolver(() => Parcela)
export class ParcelaResolver {
  constructor(
        private parcelaService: ParcelaService
    ) {}

  @Mutation(() => Parcela)
  createParcela(@Args('createParcelaDto') body: CreateParcelaDto) {
    const parcela = this.parcelaService.create(body);
    return parcela;
  }

  @Query(() => [Parcela], { name: 'parcelas' })
  findAll() {
    return this.parcelaService.findAll();
  }

  @Query(() => Parcela, { name: 'parcela' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.parcelaService.findOne(id);
  }

//   @Mutation(() => Parcela)
//   updateEscola(@Args('updateParcelaDto') updateParcelaDto: UpdateParcelaDto, id: number) {
//     return this.parcelaService.update(id, updateParcelaDto);
//   }
}
