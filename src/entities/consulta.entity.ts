import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm"
import { Prontuario } from "./prontuario.entity"

@Entity("consultas")
export class Consulta {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string

  @CreateDateColumn()
  data: Date

  @UpdateDateColumn()
  atualizadoEm: Date

  @Column()
  idadeGestacional: number

  @Column({ type: "decimal", precision: 4, scale: 3 })
  peso: number

  @Column({ length: 50 })
  pressãoArterial: string

  @Column({ length: 10 })
  uteroFita?: string

  @Column({ length: 10 })
  apresentacao?: string

  @Column()
  movimentacaoFetal?: boolean

  @Column({ length: 10 })
  batimentoCardFetal?: string

  @Column({ length: 10 })
  edema?: string

  @Column({ length: 200 })
  toqueVaginal?: string

  @Column({ length: 200 })
  conduta: string

  @Column({ type: "date" })
  retorno?: string

  @ManyToOne(() => Prontuario, { eager: true })
  prontuario: Prontuario
}
