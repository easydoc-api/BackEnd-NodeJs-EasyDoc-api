export interface IConsultRequest {
  idadeGestacional: number
  peso: number
  pressaoArterial: string
  uteroFita?: string
  apresentacao?: string
  movimentacaoFetal?: boolean
  batimentoCardFetal?: string
  edema?: string
  toqueVaginal?: string
  conduta: string
  retorno?: string
}
