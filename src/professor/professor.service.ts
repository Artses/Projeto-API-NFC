import { Injectable } from '@nestjs/common';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';
import { Professor } from './entities/professor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class ProfessorService {
  constructor(
    @InjectRepository(Professor)
    private professorRepository: Repository<Professor>
  ){}
  create(createProfessorDto: any) {
    return this.professorRepository.save(createProfessorDto);
  }

  findAll() {
    return this.professorRepository.find();
  }

  findOne(id: number) {
    return this.professorRepository.findOneBy({id});
  }

  update(id: number, updateProfessorDto: any) {
    updateProfessorDto.id = id 
    return this.professorRepository.save(updateProfessorDto);
  }

  remove(id: number) {
    return this.professorRepository.delete({id});
  }
}
