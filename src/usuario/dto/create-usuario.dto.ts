import { ApiProperty } from '@nestjs/swagger';
export class CreateUsuarioDto {
    @ApiProperty({example: "Exemple@gmail.com"})
    email: string;

    @ApiProperty({example: "123"})
    senha: string;
}
