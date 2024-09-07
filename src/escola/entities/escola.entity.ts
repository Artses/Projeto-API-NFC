import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Escola {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @OneToOne( () => Usuario)
    usuario : Usuario
    
}
