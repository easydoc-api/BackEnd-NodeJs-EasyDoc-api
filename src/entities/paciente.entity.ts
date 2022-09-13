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

  @Column({ 
    length: 200, 
    nullable: true 
  })
  nomeBebe: string

  @Column({ 
    length: 200, 
    nullable: true 
  })
  nomePai: string

  @Column()
  diagnostico: string

  @Column()
  procedimentos: string

  @Column({ 
    length: 20, 
    nullable: true 
  })
  cariotipo: string

  @OneToOne(() => Prontuario, {
    eager: true,
    nullable: true,
  })
  @JoinColumn({
    name: "prontuario_id",
  })
  prontuario: Prontuario

  @OneToMany((type) => Arquivos, (arquivos) => arquivos.paciente, { nullable: false })
  arquivos: Arquivos[]
}
