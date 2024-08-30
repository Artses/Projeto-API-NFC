import { Injectable } from '@nestjs/common';
import { CreateEscolaDto } from './dto/create-escola.dto';
import { UpdateEscolaDto } from './dto/update-escola.dto';
import { Escola } from './entities/escola.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EscolaService {
  constructor(
    @InjectRepository(Escola)
    private escolaRepository: Repository<Escola>
  ){}
  create(createEscolaDto: CreateEscolaDto) {
    return this.escolaRepository.save(createEscolaDto);
  }

  findAll() {
    return this.escolaRepository.find();
  }

  findOne(id: number) {
    return this.escolaRepository.findOneBy({id});
  }

  update(id: number, updateEscolaDto: any) {
    updateEscolaDto.id = id
    return this.escolaRepository.save(updateEscolaDto);
  }

  remove(id: number) {
    return this.escolaRepository.delete({id});
  }
}
