import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm"
import { Exclude } from "class-transformer"
import { Prontuario } from "./prontuario.entity"

@Entity("medicos")
export class Medico {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string

  @Column({ type: "date" })
  criadoEm: string

  @Column({ type: "date" })
  atualizadoEm: string

  @Column({ length: 200 })
  nome: string

  @Column({ length: 200, unique: true })
  email: string

  @Column({ length: 200 })
  @Exclude()
  senha: string

  @Column({ length: 200 })
  categoria: string

  @Column({ default: true })
  estaAtivo: boolean

  @Column({ default: false })
  adm: boolean

  @ManyToOne(() => Prontuario, { eager: true })
  prontuario: Prontuario
}
