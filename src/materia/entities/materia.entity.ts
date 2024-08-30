import { Professor } from "src/professor/entities/professor.entity";
import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Materia {
    @PrimaryColumn()
    id: number

    @Column()
    nome: string

    @ManyToOne( () => Professor)
    professor: Professor
}
