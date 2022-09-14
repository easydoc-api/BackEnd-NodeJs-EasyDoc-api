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

  @Column({ length: 500 })
  pressãoArterial: string

  @Column({ 
    length: 1000,
    nullable: true
   })
  uteroFita: string

  @Column({ 
    length: 1000,
    nullable: true
   })
  apresentacao: string

  @Column({nullable: true})
  movimentacaoFetal: boolean

  @Column({ 
    length: 100,
    nullable: true
   })
  batimentoCardFetal: string

  @Column({ 
    length: 1000,
    nullable: true
   })
  edema: string

  @Column({ length: 2000,
    nullable: true
   })
  toqueVaginal: string

  @Column({ length: 2000 })
  conduta: string

  @Column({ 
    type: "date",
    nullable: true
 })
  retorno: string

  @Column({ default: true })
  estaAtivo: boolean

  @ManyToOne(() => Prontuario, { eager: true })
  prontuario: Prontuario
}
