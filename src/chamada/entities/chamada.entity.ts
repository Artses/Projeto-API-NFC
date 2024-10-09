import { Aluno } from "src/aluno/entities/aluno.entity";
import { Materia } from "src/materia/entities/materia.entity";
import { Professor } from "src/professor/entities/professor.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('chamada')
export class Chamada {
    @PrimaryGeneratedColumn()
    id: Number
    
    @ManyToOne( () => Aluno )
    aluno: Aluno["id"]

    @ManyToOne( () => Professor)
    professor?: Professor["id"]

    @OneToOne( () => Materia)
    @JoinColumn()
    materia: Materia["id"]

    @CreateDateColumn()
    data: Date

    @Column()
    tipoChamada: string
}
