import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, OneToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Escola {
    @PrimaryColumn()
    id: number

    @Column()
    nome: string

    @OneToOne( () => Usuario)
    usuario : Usuario
    
}
