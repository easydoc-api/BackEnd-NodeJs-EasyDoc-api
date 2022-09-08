import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm"
import { Arquivos } from "./arquivos.entity"
import { Prontuario } from "./prontuario.entity"

@Entity("pacientes")
export class Paciente {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string

  @CreateDateColumn()
  criadoEm: string

  @UpdateDateColumn()
  atualizadoEm: string

  @Column({ default: true })
  estaAtivo: boolean

  @Column()
  nome: string

  @Column({ unique: true })
  cpf: string

  @Column()
  email?: string

  @Column({ type: "date" })
  dataNascimento: string

  @Column()
  cidadeOrigem: string

  @Column()
  idade: number

  @Column()
  nomeBebe?: string

  @Column()
  nomePai?: string

  @Column()
  diagnostico: string

  @Column()
  procedimentos?: string

  @Column()
  cariotipo?: string

  @OneToOne(() => Prontuario, {
    eager: true,
    nullable: true,
  })
  @JoinColumn({
    name: "prontuario_id",
  })
  prontuario: Prontuario

  @OneToMany(() => Arquivos, (arquivos) => arquivos.paciente)
  arquivos: Arquivos
}
