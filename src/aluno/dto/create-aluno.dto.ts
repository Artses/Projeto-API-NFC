import { ApiProperty } from "@nestjs/swagger";

export class CreateAlunoDto {
    @ApiProperty({example: "Aluno"})
    nome: string; 
}
