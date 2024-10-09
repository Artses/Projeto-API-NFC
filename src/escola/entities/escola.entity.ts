import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Escola {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @ManyToOne( () => Usuario)
    usuario : Usuario["id"]
    
}
