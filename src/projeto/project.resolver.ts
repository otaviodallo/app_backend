import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { ProjectService } from './project.service';
import { Projeto } from './entities/projeto.entity';
import { CreateProjectDto } from './dtos/create-project.dto';
import { UpdateProjectDto } from './dtos/update-project.dto';
import { EmpresaService } from 'src/empresa/empresa.service';
import { EscolaService } from 'src/escola/escola.service';
import { Empresa } from 'src/empresa/entities/empresa.entity';
import { Escola } from 'src/escola/entities/escola.entity';
import { Parcela } from 'src/parcela/entities/parcela.entity';
import { ParcelaService } from 'src/parcela/parcela.service';


@Resolver(() => Projeto)
export class ProjectResolver {
  constructor(
    private readonly projectService: ProjectService,
    private readonly empresaService: EmpresaService,
    private readonly escolaService: EscolaService,
    private readonly parcelaService: ParcelaService
    ) {}

  @Mutation(() => Projeto)
  createProject(@Args('createProjectDto') body: CreateProjectDto) {
    const user = this.projectService.create(body);
    return user;
  }

  @Query(() => [Projeto], { name: 'projects' })
  async findAll() {
    return await this.projectService.findAll();
  }

  @ResolveField('empresa', () => Empresa)
  async resolveEmpresa(@Parent() projeto: Projeto) {
    return await this.empresaService.findOne(projeto.empresaId);
  }

  @ResolveField('escola', () => Escola)
  async resolveEscola(@Parent() projeto: Projeto) {
    return await this.escolaService.findOne(projeto.escolaId);
  }

  @Query(() => [Projeto], { name: 'findAllByEmpresa' })
  findAllByEmpresa(@Args('empresaId', { type: () => Int }) empresaId: number){
    return this.projectService.findAllByEmpresa(empresaId)
  }

  @Query(() => [Projeto], { name: 'findAllByEscola' })
  findAllByEscola(@Args('escolaId', { type: () => Int }) escolaId: number){
    return this.projectService.findAllByEscola(escolaId)
  }

  @Query(() => [Projeto], { name: 'project' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.projectService.findOne(id);
  }

  @Query(() => [Projeto], { name: 'projetoByCr' })
  findByCr(@Args('cr', { type: () => String }) cr: string){
    return this.projectService.findByCr(cr)
  }

  @Mutation(() => Projeto)
  updateProject(@Args('updateProjectDto') updateProjectDto: UpdateProjectDto) {
    return this.projectService.update(updateProjectDto);
  }

  @Mutation(() => Projeto)
  removeProject(@Args('id', { type: () => Int }) id: number) {
    return this.projectService.remove(id);
  }
}
