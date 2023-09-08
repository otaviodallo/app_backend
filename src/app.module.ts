import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { EmpresaModule } from './empresa/empresa.module';
import { ProjectModule } from './projeto/project.module';
import { EscolaModule } from './escola/escola.module';
import { ParcelaModule } from './parcela/parcela.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    sortSchema: true,
  }),
    ProjectModule,
    EmpresaModule,
    EscolaModule,
    ParcelaModule
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
