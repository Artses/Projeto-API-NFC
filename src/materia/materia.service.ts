import { Injectable } from '@nestjs/common';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import { Materia } from './entities/materia.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MateriaService {
  constructor(
    @InjectRepository(Materia)
    private materiaRepository: Repository<Materia>
  ){}
  create(createMateriaDto: CreateMateriaDto) {
    return this.materiaRepository.save(createMateriaDto);
  }

  findAll() {
    return this.materiaRepository.find();
  }

  findOne(id: number) {
    return this.materiaRepository.findOneBy({id});
  }

  update(id: number, updateMateriaDto: any) {
    updateMateriaDto.id = id
    return this.materiaRepository.save(updateMateriaDto);
  }

  remove(id: number) {
    return this.materiaRepository.delete({id});
  }
}
