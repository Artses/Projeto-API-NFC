import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { JwtModule } from '@nestjs/jwt';
import 'dotenv/config'

@Module({
  imports: [TypeOrmModule.forFeature([Usuario]),JwtModule.register({
    secret: process.env.SECRET_KEY,
    signOptions: {expiresIn: '1d'}
  })],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
