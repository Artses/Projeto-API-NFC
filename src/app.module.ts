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
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        synchronize: configService.get<boolean>('DB_SYNCHRONIZE'),
        entities: [
          Usuario,
          Aluno,
          Professor,
          Escola,
          Materia,
          Chamada,
        ],
      }),
      inject: [ConfigService],
    }),
    UsuarioModule,
    AlunoModule,
    ProfessorModule,
    EscolaModule,
    MateriaModule,
    ChamadaModule,
    AuthModule,
  ],
})
export class AppModule {}