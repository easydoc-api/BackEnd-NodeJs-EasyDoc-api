import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm"
import { Prontuario } from "./prontuario.entity"

@Entity("exames_de_imagem")
export class ExamesDeImagem {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string

  @CreateDateColumn()
  data: Date

  @UpdateDateColumn()
  atualizadoEm: Date

  @Column({ 
    length: 2000,
    nullable: true
   })
  laudo: string

  @Column({nullable: true})
  anexos: string

  @ManyToOne(() => Prontuario, (prontuario) => prontuario.examesImagem)
  prontuario: Prontuario
}
