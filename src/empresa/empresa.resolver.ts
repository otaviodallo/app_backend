import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CreateEmpresaDto } from './dtos/create-empresa.dto';
import { Empresa } from './entities/empresa.entity';
import { EmpresaService } from './empresa.service';
import { UpdateEmpresaDto } from './dtos/update-empresa.dto';


@Resolver(() => Empresa)
export class EmpresaResolver {
  constructor(
        private empresaService: EmpresaService
    ) {}

  @Mutation(() => Empresa)
  createEmpresa(@Args('createEmpresaDto') body: CreateEmpresaDto) {
    const empresa = this.empresaService.create(body);
    return empresa;
  }

  @Query(() => [Empresa], { name: 'empresas' })
  findAll() {
    return this.empresaService.findAll();
  }

  @Query(() => Empresa, { name: 'empresa' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.empresaService.findOne(id);
  }

  @Mutation(() => Empresa)
  updateEmpresa(@Args('updateEmpresaDto') updateEmpresaDto: UpdateEmpresaDto, id: number) {
    return this.empresaService.update(id, updateEmpresaDto);
  }
}
