import * as yup from "yup"
import { SchemaOf } from "yup"
import { IMedicoRequest } from "../interfaces/medicos"

export const newDoctorSchema: SchemaOf<IMedicoRequest> = yup.object().shape({
  nome: yup.string().required(),
  email: yup.string().email().required(),
  senha: yup.string().required(),
  categoria: yup.string().required(),
})
