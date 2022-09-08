export interface IProntuarioRequest {
  paciente_id: string
  medico_id: []
  consulta_id: []
  exameImagem_id: []
  consultaZero_id: string
  exameLaboratorial_id: []
  criadoEm: Date
  atualizadoEm: Date
}
