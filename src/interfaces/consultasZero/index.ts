export interface IConsultZeroRequest {
  paridade: string
  consanguinidade: string
  idadeGestacional: number
  dataMenstruacao?: string
  primeiroUltrassom?: string
  semanaGestacional: number
  diaGestacional: number
  historiaPregressa: string
  historiaGinecologicaObstetrica: string
}
