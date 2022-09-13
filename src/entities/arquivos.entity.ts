import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from "typeorm"
import { Paciente } from "./paciente.entity"

@Entity("arquivos")
export class Arquivos {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string

  @Column({ default: true })
  estaAtivo: boolean

  @CreateDateColumn()
  data: Date

  @Column()
  anexos: string

  @ManyToOne(() => Paciente, {
    eager: true,
    nullable: false,
  })
  paciente: Paciente
}
