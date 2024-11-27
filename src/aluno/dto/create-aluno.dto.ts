import { ApiProperty } from "@nestjs/swagger";

export class CreateAlunoDto {
    @ApiProperty({example: "12302546"})
    id: number; 
    @ApiProperty({example: "Aluno"})
    nome: string; 
}
