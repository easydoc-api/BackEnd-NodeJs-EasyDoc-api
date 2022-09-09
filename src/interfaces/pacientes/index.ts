// export interface IPacienteRequest {
//   nome: string
//   cpf: string
//   email?: string
//   dataNascimento: Date
//   cidadeOrigem: string
//   idade: number
//   nomeBebe?: string
//   nomeDoPai?: string
//   diagnostico: string
//   procedimentos?: string
//   cariotipo?: string
//   criadoEm: Date
//   atualizadoEm: Date
//   estaAtivo: boolean
//   arquivos_id?: Array<[]>
// }

import { IImageExamesRequest } from "../examesImagem"

export interface IPacienteRequest {
  nome: string
  cpf: string
  email?: string
  dataNascimento: string
  cidadeOrigem: string
  idade: number
  nomeDoBebe?: string
  nomeDoPai?: string
  diagnostico: string
  procedimentos?: string
  cariotipo?: string
  arquivos_id?: IImageExamesRequest
}
