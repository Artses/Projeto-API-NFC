import { Injectable } from '@nestjs/common';
import { CreateEscolaDto } from './dto/create-escola.dto';
import { UpdateEscolaDto } from './dto/update-escola.dto';

@Injectable()
export class EscolaService {
  create(createEscolaDto: CreateEscolaDto) {
    return 'This action adds a new escola';
  }

  findAll() {
    return `This action returns all escola`;
  }

  findOne(id: number) {
    return `This action returns a #${id} escola`;
  }

  update(id: number, updateEscolaDto: UpdateEscolaDto) {
    return `This action updates a #${id} escola`;
  }

  remove(id: number) {
    return `This action removes a #${id} escola`;
  }
}
