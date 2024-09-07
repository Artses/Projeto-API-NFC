import { Professor } from "src/professor/entities/professor.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Materia {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @ManyToOne( () => Professor)
    professor: Professor
}
