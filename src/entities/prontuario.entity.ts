import {
  Entity,
  OneToOne,
  OneToMany,
  JoinColumn,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
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

  @OneToMany(() => Medico, (Medico) => Medico.prontuario)
  medicos: Medico[]

  @OneToMany(() => Consulta, (consulta) => consulta.prontuario)
  consultas: Consulta[]

  @OneToMany(() => ExamesDeImagem, (examesImagem) => examesImagem.prontuario)
  examesImagem: ExamesDeImagem[]

  @OneToMany(
    () => ExamesLaboratoriais,
    (examesLaboratoriais) => examesLaboratoriais.prontuario
  )
  examesLaboratoriais: ExamesLaboratoriais[]
}
