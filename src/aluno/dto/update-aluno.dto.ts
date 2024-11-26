import { PartialType } from '@nestjs/mapped-types';
import { CreateAlunoDto } from './create-aluno.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAlunoDto extends PartialType(CreateAlunoDto) {
    @ApiProperty({example: "Aluno"})
    nome: string; 
}
