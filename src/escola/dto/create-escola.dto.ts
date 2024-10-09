import { ApiProperty } from "@nestjs/swagger"

export class CreateEscolaDto {
    @ApiProperty({example: "Cotemig"})
    nome: string
    @ApiProperty({example: 1})
    usuario : number
}
