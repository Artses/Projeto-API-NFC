import { ApiProperty } from "@nestjs/swagger";

export class CreateMateriaDto {
    @ApiProperty({example: "Mamatica"})
    nome: string
}
