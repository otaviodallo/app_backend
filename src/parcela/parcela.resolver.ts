import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { Parcela } from './entities/parcela.entity';
import { CreateParcelaDto } from './dtos/create-parcela.dto';
import { ParcelaService } from './parcela.service';
import { ProjectService } from 'src/projeto/project.service';
import { Projeto } from 'src/projeto/entities/projeto.entity';
import { UpdateParcelaDto } from './dtos/update-parcela.dto';

@Resolver(() => Parcela)
export class ParcelaResolver {
  constructor(
    private readonly parcelaService: ParcelaService,
    private readonly projectService: ProjectService
  ) { }

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
  @Query(() => [Parcela], { name: 'parcelasPorMesCompetencia' })
  async findParcelasByMesCompetencia(@Args('mes', { type: () => Int }) mes: number) {
    return this.parcelaService.findByMesCompetencia(mes);
  }
  @Query(() => [Parcela], { name: 'parcelasPorMesReferencia' })
  async findParcelasByMesReferencia(@Args('mes', { type: () => Int }) mes: number) {
    return this.parcelaService.findByMesReferencia(mes);
  }
  @Query(() => [Parcela], { name: 'parcelasPorProjetoId' })
  async findParcelasByProjetoId(@Args('projetoId', { type: () => Int }) projetoId: number) {
    return this.parcelaService.findAllByProjeto(projetoId);
  }
  @Mutation(() => Parcela)
  updateParcela(@Args('updateParcelaDto') updateParcelaDto: UpdateParcelaDto) {
    return this.parcelaService.update(updateParcelaDto);
  }
  @Mutation(() => Parcela)
  removeParcela(@Args('id', { type: () => Int }) id: number) {
    return this.parcelaService.remove(id);
  }
}
