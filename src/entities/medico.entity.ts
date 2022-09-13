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

  @Column()
  criadoEm: Date

  @Column()
  atualizadoEm: Date

  @Column({ length: 200 })
  nome: string

  @Column({ length: 200, unique: true })
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

  @ManyToOne(() => Prontuario, { eager: true })
  prontuario: Prontuario
}
