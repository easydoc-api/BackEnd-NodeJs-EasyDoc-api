import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  OneToOne,
} from "typeorm";

@Entity("consultas_zero")
export class ConsultaZero {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @UpdateDateColumn()
  atualizadoEm: Date;

  @CreateDateColumn()
  data: Date;

  @Column({ length: 2000 })
  paridade: string;

  @Column({ length: 1000 })
  consanguinidade: string;

  @Column()
  idadeGestacional: number;

  @Column({
    type: "date",
    nullable: true,
  })
  dataMenstruacao: string;

  @Column({
    type: "date",
    nullable: true,
  })
  primeiroUltrassom: string;

  @Column()
  semanaGestacional: number;

  @Column()
  diaGestacional: number;

  @Column({ length: 2000 })
  historiaPregressa: string;

  @Column({ length: 2000 })
  historiaGinecologicaObstetrica: string;

  @Column({ default: true })
  estaAtivo: boolean;
}
