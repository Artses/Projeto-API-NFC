import { HttpStatus, Injectable } from '@nestjs/common';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import { UpdateChamadaDto } from 'src/chamada/dto/update-chamada.dto';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { response } from 'express';
import { json } from 'stream/consumers';
import { error } from 'console';

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

  async login(senha: string, email: string) {
    const user = await this.usuarioRepository.findOne({
      where: {
        senha: senha,
        email: email,
      },
    }); 
  
    if (!user) 
      throw new Error();

    return({
      status: HttpStatus.ACCEPTED,
      mensagem: 'Bem vindo'
    }) ;
  }

  update(id: number, updateUsuarioDto: any) {
    updateUsuarioDto.id = id
    return this.usuarioRepository.save(updateUsuarioDto);
  }

  remove(id: number) {
    return this.usuarioRepository.delete({id});
  }
}
