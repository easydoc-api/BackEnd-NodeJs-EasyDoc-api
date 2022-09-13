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

  @Column({ 
    length: 20, 
    nullable: true 
  })
  gs_rh: string

  @Column({ 
    length: 20, 
    nullable: true 
  })
  coombs: string

  @Column({ 
    length: 20, 
    nullable: true 
  })
  hb_ht: string

  @Column({ 
    length: 20, 
    nullable: true 
  })
  plaq: string

  @Column({ 
    length: 20, 
    nullable: true 
  })
  gj: string

  @Column({ 
    length: 20, 
    nullable: true 
  })
  gpd: string

  @Column({ 
    length: 20, 
    nullable: true 
  })
  vdrl: string

  @Column({ 
    length: 20, 
    nullable: true 
  })
  hbsag: string

  @Column({ 
    length: 20, 
    nullable: true 
  })
  antiHiv: string

  @Column({ 
    length: 20, 
    nullable: true 
  })
  antiHcv: string

  @Column({ 
    length: 20, 
    nullable: true 
  })
  antiHtlv: string

  @Column({ 
    length: 20, 
    nullable: true 
  })
  toxop: string

  @Column({ 
    length: 20, 
    nullable: true 
  })
  rubeola: string

  @Column({ 
    length: 20, 
    nullable: true 
  })
  cmv: string

  @Column({ 
    length: 20, 
    nullable: true 
  })
  tsh: string

  @Column({ 
    length: 20, 
    nullable: true 
  })
  eas: string

  @Column({ 
    length: 20, 
    nullable: true 
  })
  urocult: string

  @Column({ 
    length: 20, 
    nullable: true 
  })
  strep: string

  @Column({ 
    length: 20, 
    nullable: true 
  })
  eletro: string

  @ManyToOne(() => Prontuario, { eager: true })
  prontuario: Prontuario

  @Column({ default: true })
  estaAtivo: boolean
}
