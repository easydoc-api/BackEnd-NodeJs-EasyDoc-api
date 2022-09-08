import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm"
import { Prontuario } from "./prontuario.entity"

@Entity("exames_laboratoriais")
export class ExamesLaboratoriais {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string

  @UpdateDateColumn()
  atualizadoEm: Date

  @CreateDateColumn()
  data: Date

  @Column({ length: 20 })
  gs_rh?: string

  @Column({ length: 20 })
  coombs?: string

  @Column({ length: 20 })
  hb_ht?: string

  @Column({ length: 20 })
  plaq?: string

  @Column({ length: 20 })
  gj?: string

  @Column({ length: 20 })
  gpd?: string

  @Column({ length: 20 })
  vdrl?: string

  @Column({ length: 20 })
  hbsag?: string

  @Column({ length: 20 })
  antiHiv?: string

  @Column({ length: 20 })
  antiHcv?: string

  @Column({ length: 20 })
  antiHtlv?: string

  @Column({ length: 20 })
  toxop?: string

  @Column({ length: 20 })
  rubeola?: string

  @Column({ length: 20 })
  cmv?: string

  @Column({ length: 20 })
  tsh?: string

  @Column({ length: 20 })
  eas?: string

  @Column({ length: 20 })
  urocult?: string

  @Column({ length: 20 })
  strep?: string

  @Column({ length: 20 })
  eletro?: string

  @ManyToOne(() => Prontuario, { eager: true })
  prontuario: Prontuario
}
