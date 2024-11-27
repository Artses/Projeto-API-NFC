import { Aluno } from "src/aluno/entities/aluno.entity";
import { Professor } from "src/professor/entities/professor.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity('chamada')
export class Chamada {
    @PrimaryGeneratedColumn()
    id: Number
    
    @ManyToOne( () => Aluno )
    aluno: Aluno["id"]

    @ManyToOne( () => Professor)
    professor?: Professor["id"]

    @CreateDateColumn()
    data: Timestamp

    @Column()
    tipoChamada: string
}
