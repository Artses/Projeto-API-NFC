import { Module } from '@nestjs/common';
import { ChamadaService } from './chamada.service';
import { ChamadaController } from './chamada.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chamada } from './entities/chamada.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Chamada])],
  controllers: [ChamadaController],
  providers: [ChamadaService],
})
export class ChamadaModule {}
