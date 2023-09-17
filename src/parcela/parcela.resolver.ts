import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { Parcela } from './entities/parcela.entity';
import { CreateParcelaDto } from './dtos/create-parcela.dto';
import { ParcelaService } from './parcela.service';
import { EmpresaService } from 'src/empresa/empresa.service';
import { ProjectService } from 'src/projeto/project.service';
import { Projeto } from 'src/projeto/entities/projeto.entity';

@Resolver(() => Parcela)
export class ParcelaResolver {
  constructor(
        private readonly parcelaService: ParcelaService,
        private readonly empresaService: EmpresaService,
        private readonly projectService: ProjectService
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

  @ResolveField('projeto', () => Projeto) 
  async resolveEmpresa(@Parent() parcela: Parcela) {
    return await this.projectService.findOne(parcela.projetoId);
  }

  @Query(() => Parcela, { name: 'parcela' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.parcelaService.findOne(id);
  }

  // @Query(() => [Parcela])
  // async findParcelasByProjetoId(@Args('projetoId', { type: () => Int }) projetoId: number) {
  //   return this.parcelaService.findByProjetoId(projetoId);
  // }

//   @Mutation(() => Parcela)
//   updateEscola(@Args('updateParcelaDto') updateParcelaDto: UpdateParcelaDto, id: number) {
//     return this.parcelaService.update(id, updateParcelaDto);
//   }
}
