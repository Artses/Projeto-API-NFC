import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>
  ){}

  findAll() {
    return this.usuarioRepository.find();
  }

  remove(id: number) {
    return this.usuarioRepository.delete({id});
  }
}
