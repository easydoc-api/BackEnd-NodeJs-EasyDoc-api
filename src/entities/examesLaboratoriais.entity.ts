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
    length: 200, 
    nullable: true 
  })
  gs_rh: string

  @Column({ 
    length: 200, 
    nullable: true 
  })
  coombs: string

  @Column({ 
    length: 200, 
    nullable: true 
  })
  hb_ht: string

  @Column({ 
    length: 200, 
    nullable: true 
  })
  plaq: string

  @Column({ 
    length: 200, 
    nullable: true 
  })
  gj: string

  @Column({ 
    length: 200, 
    nullable: true 
  })
  gpd: string

  @Column({ 
    length: 200, 
    nullable: true 
  })
  vdrl: string

  @Column({ 
    length: 200, 
    nullable: true 
  })
  hbsag: string

  @Column({ 
    length: 200, 
    nullable: true 
  })
  antiHiv: string

  @Column({ 
    length: 200, 
    nullable: true 
  })
  antiHcv: string

  @Column({ 
    length: 200, 
    nullable: true 
  })
  antiHtlv: string

  @Column({ 
    length: 200, 
    nullable: true 
  })
  toxop: string

  @Column({ 
    length: 200, 
    nullable: true 
  })
  rubeola: string

  @Column({ 
    length: 200, 
    nullable: true 
  })
  cmv: string

  @Column({ 
    length: 200, 
    nullable: true 
  })
  tsh: string

  @Column({ 
    length: 200, 
    nullable: true 
  })
  eas: string

  @Column({ 
    length: 200, 
    nullable: true 
  })
  urocult: string

  @Column({ 
    length: 200, 
    nullable: true 
  })
  strep: string

  @Column({ 
    length: 200, 
    nullable: true 
  })
  eletro: string

  @Column({ default: true })
  estaAtivo: boolean

  @ManyToOne(() => Prontuario, { eager: true })
  prontuario: Prontuario
}
