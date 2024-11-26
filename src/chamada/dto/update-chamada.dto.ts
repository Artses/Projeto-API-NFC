import { PartialType } from '@nestjs/mapped-types';
import { CreateChamadaDto } from './create-chamada.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateChamadaDto extends PartialType(CreateChamadaDto) {
    @ApiProperty({example: 1})
    aluno: number
    @ApiProperty({example: 1})
    professor: number
    @ApiProperty({example: "Entrada"})
    tipoChamada: string
}
