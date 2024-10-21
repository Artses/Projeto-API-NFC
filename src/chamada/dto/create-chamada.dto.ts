import { ApiProperty } from "@nestjs/swagger";

export class CreateChamadaDto {
    @ApiProperty({example: 1})
    aluno: number
    @ApiProperty({example: 1})
    professor: number
    @ApiProperty({example: 1})
    materia: number
    @ApiProperty({example: "Entrada"})
    tipoChamada: string
}
