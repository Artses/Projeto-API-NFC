import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';
import { AlunoModule } from './aluno/aluno.module';
import { ProfessorModule } from './professor/professor.module';
import { EscolaModule } from './escola/escola.module';
import { MateriaModule } from './materia/materia.module';
import { ChamadaModule } from './chamada/chamada.module';
import { Chamada } from './chamada/entities/chamada.entity';
import { Usuario } from './usuario/entities/usuario.entity';
import { Aluno } from './aluno/entities/aluno.entity';
import { Professor } from './professor/entities/professor.entity';
import { Escola } from './escola/entities/escola.entity';
import { Materia } from './materia/entities/materia.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'pit',
      synchronize: false,
      entities: [
        Usuario,
        Aluno,
        Professor,
        Escola,
        Materia,
        Chamada
      ],
    }),
    UsuarioModule,
    AlunoModule,
    ProfessorModule,
    EscolaModule,
    MateriaModule,
    ChamadaModule,
  ],
})
export class AppModule {}
