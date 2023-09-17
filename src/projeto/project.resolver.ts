import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { ProjectService } from './project.service';
import { Projeto } from './entities/projeto.entity';
import { CreateProjectDto } from './dtos/create-project.dto';
import { UpdateProjectDto } from './dtos/update-project.dto';
import { EmpresaService } from 'src/empresa/empresa.service';
import { EscolaService } from 'src/escola/escola.service';
import { Empresa } from 'src/empresa/entities/empresa.entity';
import { Escola } from 'src/escola/entities/escola.entity';


@Resolver(() => Projeto)
export class ProjectResolver {
  constructor(
    private readonly projectService: ProjectService,
    private readonly empresaService: EmpresaService,
    private readonly escolaService: EscolaService
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

  @Query(() => Projeto, { name: 'project' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.projectService.findOne(id);
  }

  @Mutation(() => Projeto)
  updateProject(@Args('updateProjectDto') updateProjectDto: UpdateProjectDto, id: number) {
    return this.projectService.update(id, updateProjectDto);
  }

  @Mutation(() => Projeto)
  removeProject(@Args('id', { type: () => Int }) id: number) {
    return this.projectService.remove(id);
  }
}
