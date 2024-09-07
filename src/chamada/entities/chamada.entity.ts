import { Aluno } from "src/aluno/entities/aluno.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('chamada')
export class Chamada {
    @PrimaryGeneratedColumn()
    id: Number

    @CreateDateColumn()
    data: Date

    @ManyToOne( () => Aluno )
    aluno: Aluno["id"]

    @Column()
    tipoChamada: string

}
