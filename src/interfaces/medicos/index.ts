export interface IMedico {
  id: string
  nome: string
  email: string
  senha: string
  adm: boolean
  categoria: string
  criadoEm: Date
  atualizadoEm: Date
}

export interface IMedicoRequest {
  nome: string
  email: string
  senha: string
  categoria: string
}

export interface IMedicoLogin {
  email: string
  senha: string
}

export interface IMedicoUpdate {
  nome?: string
  email?: string
  senha?: string
  categoria?: string
}