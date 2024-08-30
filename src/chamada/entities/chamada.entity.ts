import { Aluno } from "src/aluno/entities/aluno.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";

@Entity('chamada')
export class Chamada {
    @PrimaryColumn()
    id: Number

    @CreateDateColumn()
    data: Date

    @ManyToOne( () => Aluno )
    aluno: Aluno

    @Column()
    tipoChamada: string

}
