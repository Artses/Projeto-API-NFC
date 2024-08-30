import { Module } from '@nestjs/common';
import { EscolaService } from './escola.service';
import { EscolaController } from './escola.controller';
import { Escola } from './entities/escola.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Escola])],
  controllers: [EscolaController],
  providers: [EscolaService],
})
export class EscolaModule {}
