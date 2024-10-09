import { PartialType } from '@nestjs/mapped-types';
import { CreateEscolaDto } from './create-escola.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateEscolaDto extends PartialType(CreateEscolaDto) {
    @ApiProperty({example: "Cotemig"})
    nome: string
    @ApiProperty({example: 1})
    usuario : number
}
