import { Injectable } from '@nestjs/common';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import { UpdateChamadaDto } from 'src/chamada/dto/update-chamada.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>
  ){}
  create(createUsuarioDto: any) {
    return this.usuarioRepository.save(createUsuarioDto);
  }

  findAll() {
    return this.usuarioRepository.find();
  }

  findOne(id: number) {
    return this.usuarioRepository.findOneBy({id});
  }

  update(id: number, updateUsuarioDto: any) {
    updateUsuarioDto.id = id
    return this.usuarioRepository.save(updateUsuarioDto);
  }

  remove(id: number) {
    return this.usuarioRepository.delete({id});
  }
}
