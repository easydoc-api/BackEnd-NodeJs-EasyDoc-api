export interface IPacienteRequest {
  nome: string
  cpf: string
  email?: string
  dataNascimento: string
  cidadeOrigem: string
  idade: number
  nomeBebe?: string
  nomePai?: string
  diagnostico: string
  procedimentos?: string
  cariotipo?: string
  arquivos_id?: Array<[]>
}

export interface IPacienteResponse {
  nome: string
  cpf: string
  email?: string
  dataNascimento: string
  cidadeOrigem: string
  idade: number
  nomeBebe?: string
  nomePai?: string
  diagnostico: string
  procedimentos?: string
  cariotipo?: string
  criadoEm: Date
  atualizadoEm: Date
  estaAtivo: boolean
  arquivos_id?: Array<[]>
}

export interface IPacienteUpdate {
  nome?: string
  cpf?: string
  email?: string
  dataNascimento?: string
  cidadeOrigem?: string
  idade?: number
  nomeBebe?: string
  nomePai?: string
  diagnostico?: string
  procedimentos?: string
  cariotipo?: string
  arquivos_id?: Array<[]>
}