import { Injectable } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { Aluno } from './entities/aluno.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AlunoService {
  constructor(
    @InjectRepository(Aluno)
    private alunoRepository: Repository<Aluno>
  ){}
  create(createAlunoDto: any) {
    return this.alunoRepository.save(createAlunoDto);
  }

  findAll() {
    return this.alunoRepository.find();
  }

  findOne(id: number) {
    return this.alunoRepository.findOneBy({id});
  }

  update(id: number, updateAlunoDto: any) {
    updateAlunoDto.id = id
    return this.alunoRepository.save(updateAlunoDto);
  }

  remove(id: number) {
    return this.alunoRepository.delete({id});
  }
}
