import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
} from "typeorm"
import { Exclude } from "class-transformer"
import { Prontuario } from "./prontuario.entity"

@Entity("medicos")
export class Medico {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string

  @Column()
  criadoEm: Date

  @Column()
  atualizadoEm: Date

  @Column({ length: 2000 })
  nome: string

  @Column({ length: 2000, unique: true })
  email: string

  @Column({ length: 200 })
  @Exclude({toPlainOnly: true})
  senha: string

  @Column({ length: 200 })
  categoria: string

  @Column({ default: true })
  estaAtivo: boolean

  @Column({ default: false })
  adm: boolean

  @ManyToMany(() => Prontuario, (prontuario) => prontuario.medicos)
  prontuario: Prontuario[]
}
