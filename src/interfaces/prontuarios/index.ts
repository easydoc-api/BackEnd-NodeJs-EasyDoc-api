import { IConsulta } from "../consultas"
import { IMedicoChart } from "../medicos"
import {IImageExames} from  "../examesImagem"
import { ILabExames } from "../examesLaboratoriais"

export interface IProntuarioRequest {
  medicos?: IMedicoChart[]
  consultas?: IConsulta[]
  examesImagens?: IImageExames[]
  consultaZero_id?: string
  examesLaboratoriais?: ILabExames[]
}

export interface IProntuarioResponse {
  paciente_id?: string
  medicos?: IMedicoChart[]
  consultas?: IConsulta[]
  examesImagens?: IImageExames[]
  consultaZero_id?: string
  examesLaboratoriais?: ILabExames[]
  criadoEm: string
  atualizadoEm: string
}