import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProjectService } from './project.service';
import { Projeto } from './entities/projeto.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';


@Resolver(() => Projeto)
export class ProjectResolver {
  constructor(
    private readonly projectService: ProjectService,
    ) {}

  @Mutation(() => Projeto)
  createProject(@Args('createProjectDto') body: CreateProjectDto) {
    const user = this.projectService.create(body);
    return user;
  }

  @Query(() => [Projeto], { name: 'projects' })
  findAll() {
    return this.projectService.findAll();
  }

  @Query(() => Projeto, { name: 'project' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.projectService.findOne(id);
  }

  // @Mutation(() => Projeto)
  // updateUser(@Args('updateUserDto') updateProjectDto: UpdateProjectDto) {
  //   return this.projectService.update();
  // }

  @Mutation(() => Projeto)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.projectService.remove(id);
  }
}
