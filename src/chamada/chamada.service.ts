import { Injectable } from '@nestjs/common';
import { CreateChamadaDto } from './dto/create-chamada.dto';
import { UpdateChamadaDto } from './dto/update-chamada.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Chamada } from './entities/chamada.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChamadaService {
  constructor(
    @InjectRepository(Chamada)
    private chamadaRepository: Repository<Chamada>
  ){}

  create(createChamadaDto: any) {
    return this.chamadaRepository.save(createChamadaDto);
  }

  findAll() {
    return this.chamadaRepository.find();
  }

  findOne(id: number) {
    return this.chamadaRepository.findOneBy({id});
  }

  update(id: number, updateChamadaDto: any) {
    updateChamadaDto.id = id
    return this.chamadaRepository.save(updateChamadaDto);
  }

  remove(id: number) {
    return this.chamadaRepository.delete({id});
  }
}
