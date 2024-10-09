import { ApiProperty } from "@nestjs/swagger";

export class CreateAlunoDto {
    @ApiProperty({example: "123"})
    nome: string; 
}
