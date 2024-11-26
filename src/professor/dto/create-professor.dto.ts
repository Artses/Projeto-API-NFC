import { ApiProperty } from "@nestjs/swagger";

export class CreateProfessorDto {
    @ApiProperty({example: "Mario"})
    nome: string;
    @ApiProperty({example: 1})
    escola: number;
    @ApiProperty({example: 1})
    usuario: number;
}
