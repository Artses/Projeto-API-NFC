import { Controller, Post, Body, Res, BadRequestException, Req, Get, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateUsuarioDto } from 'src/usuario/dto/create-usuario.dto';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private jwtService: JwtService) { }

  @ApiBody({ type: CreateUsuarioDto })
  @Post('register')
  async register(@Body() createUsuarioDto: CreateUsuarioDto) {
    const email = createUsuarioDto.email;
    const hash = await bcrypt.hash(createUsuarioDto.senha, 12);

    const user = this.authService.register({
      email,
      senha: hash
    });

    delete (await user).senha;

    return user;
  };

  @ApiBody({ type: CreateUsuarioDto })
  @Post('Login')
  async login(
    @Body('email') email: string,
    @Body('senha') senha: string,
    @Res({ passthrough: true }) response: Response) {

    const user = await this.authService.findOne({ where: { email } })

    if (!user) {
      throw new BadRequestException('Email ou senha invalido')
    }

    if (!await bcrypt.compare(senha, user.senha)) {
      throw new BadRequestException('Email ou senha invalido')
    }
    const jwt = await this.jwtService.signAsync({ id: user.id })

    response.cookie("jwt", jwt, { httpOnly: true });

    return { message: "Success" };
  };


  @Get('User')
  async user(@Req() request: Request) {

    const cookie = request.cookies['jwt']

    const data = await this.jwtService.verifyAsync(cookie)

    const user = await this.authService.findOneBy({ id: data['id'] });

    const { senha, ...result } = user

    return result;
  }

  @Post('Logout')
  async logout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('jwt');

    return{
      message: "Success"
    }
  }
}

