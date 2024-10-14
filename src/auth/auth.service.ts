import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>
  ){}

  async register(data: any): Promise<Usuario> {
    return this.usuarioRepository.save(data);
  }

  async findOne(condition: any): Promise<Usuario>{
    return this.usuarioRepository.findOne(condition);
  }

  async findOneBy(condition: any): Promise<Usuario>{
    return this.usuarioRepository.findOneBy(condition)
  }
}
