import {
  Entity,
  OneToOne,
  OneToMany,
  JoinColumn,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from "typeorm"
import { Consulta } from "./consulta.entity"
import { ConsultaZero } from "./consultaZero.entity"
import { ExamesDeImagem } from "./examesImagem.entity"
import { ExamesLaboratoriais } from "./examesLaboratoriais.entity"
import { Medico } from "./medico.entity"
import { Paciente } from "./paciente.entity"

@Entity("prontuarios")
export class Prontuario {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string

  @Column({ default: true })
  estaAtivo: boolean

  @OneToOne(() => Paciente, { cascade: true, eager: true })
  @JoinColumn()
  paciente: Paciente

  @ManyToMany(() => Medico, (medicos) => medicos.prontuario, {eager: true})
  @JoinTable()
  medicos: Medico[]

  @OneToMany(() => Consulta, (consulta) => consulta.prontuario, {eager: true})
  consultas: Consulta[]

  @OneToMany(() => ExamesDeImagem, (examesImagem) => examesImagem.prontuario, {eager: true})
  examesImagem: ExamesDeImagem[]

  @OneToMany(
    () => ExamesLaboratoriais,
    (examesLaboratoriais) => examesLaboratoriais.prontuario,
    {eager: true}
  )
  examesLaboratoriais: ExamesLaboratoriais[]
}
