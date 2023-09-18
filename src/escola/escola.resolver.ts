import { Resolver, Query, Mutation, Args, Int, Parent, ResolveField } from '@nestjs/graphql';
import { Escola } from './entities/escola.entity';
import { CreateEscolaDto } from './dtos/create-escola.dto';
import { UpdateEscolaDto } from './dtos/update-escola.dto';
import { EscolaService } from './escola.service';
import { Parcela } from 'src/parcela/entities/parcela.entity';
import { ProjectService } from 'src/projeto/project.service';
import { ParcelaService } from 'src/parcela/parcela.service';

@Resolver(() => Escola)
export class EscolaResolver {
  constructor(
        private readonly escolaService: EscolaService,
        private readonly projectService: ProjectService,
        private readonly parcelaService: ParcelaService
    ) {}
  @Mutation(() => Escola)
  createEscola(@Args('createEscolaDto') body: CreateEscolaDto) {
    const escola = this.escolaService.create(body);
    return escola;
  }
  @Query(() => [Escola], { name: 'escolas' })
  findAll() {
    return this.escolaService.findAll();
  }
  @Query(() => Escola, { name: 'escola' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.escolaService.findOne(id);
  }
  @Mutation(() => Escola)
  updateEscola(@Args('updateEscolaDto') updateEscolaDto: UpdateEscolaDto, id: number) {
    return this.escolaService.update(id, updateEscolaDto);
  }
  @Mutation(() => Escola)
  removeEscola(@Args('id', { type: () => Int }) id: number) {
    return this.escolaService.remove(id);
  }
  @ResolveField('parcelas', () => [Parcela])
  async resolveParcelas(@Parent() escola: Escola) {
    const projetos = await this.projectService.findAllByEscola(escola.id);
    const parcelas = await this.parcelaService.findParcelasByProjetos(projetos);
    return parcelas;
  }
}
