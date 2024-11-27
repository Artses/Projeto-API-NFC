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

  async findAll() {
    const chamadas = await this.chamadaRepository.createQueryBuilder('chamada')
    .leftJoinAndSelect('chamada.aluno', 'aluno')
    .select([
      'chamada.id',
      'chamada.data',
      'chamada.tipoChamada',
      'aluno.id',
      'aluno.nome' // Seleciona apenas o ID de `aluno`
    ])
    .getMany();
    return chamadas.map((chamada) => ({
      id: chamada.id,
      aluno: (chamada as any).aluno?.id,
      nome: (chamada as any).aluno?.nome,// Converte para `any` para evitar o erro de tipagem
      data: chamada.data,
      tipoChamada: chamada.tipoChamada,
    }));
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
