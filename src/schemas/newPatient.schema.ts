import * as yup from "yup"
import { SchemaOf } from "yup"
import { IPacienteRequest } from "../interfaces/pacientes"

export const newPatientSchema: SchemaOf<IPacienteRequest> = yup.object().shape({
  nome: yup.string().required(),
  cpf: yup.string().required().min(11, "CPF inválido!").max(11, "CPF inválido!"),
  email: yup.string(),
  dataNascimento: yup.string().required(),
  cidadeOrigem: yup.string().required(),
  idade: yup.number().required(),
  nomeBebe: yup.string(),
  nomePai: yup.string(),
  diagnostico: yup.string().required(),
  procedimentos: yup.string(),
  cariotipo: yup.string(),
  arquivos_id: yup.array(),
})