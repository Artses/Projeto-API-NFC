import { PartialType } from '@nestjs/mapped-types';
import { CreateMateriaDto } from './create-materia.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateMateriaDto extends PartialType(CreateMateriaDto) {
    @ApiProperty({example: 1})
    nome: string
}
