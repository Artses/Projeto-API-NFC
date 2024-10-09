import { PartialType } from '@nestjs/mapped-types';
import { CreateProfessorDto } from './create-professor.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProfessorDto extends PartialType(CreateProfessorDto) {
    @ApiProperty({example: "Mario"})
    nome: string;
    @ApiProperty({example: 1})
    escola: number;
    @ApiProperty({example: 1})
    usuario: number;
    @ApiProperty({example: 1})
    materia: number;
}
