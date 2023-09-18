import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { Parcela } from './entities/parcela.entity';
import { CreateParcelaDto } from './dtos/create-parcela.dto';
import { ParcelaService } from './parcela.service';
import { EmpresaService } from 'src/empresa/empresa.service';
import { ProjectService } from 'src/projeto/project.service';
import { Projeto } from 'src/projeto/entities/projeto.entity';
import { UpdateParcelaDto } from './dtos/update-parcela.dto';

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

  @Mutation(() => Parcela)
  updateParcela(@Args('updateParcelaDto') updateParcelaDto: UpdateParcelaDto, id: number) {
    return this.parcelaService.update(id, updateParcelaDto);
  }
}
