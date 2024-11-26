import { Escola } from "src/escola/entities/escola.entity";
import { Materia } from "src/materia/entities/materia.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Professor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @ManyToOne( () => Escola)
    escola: Escola["id"]

    @ManyToOne( () => Usuario)
    usuario: Usuario["id"]
}
