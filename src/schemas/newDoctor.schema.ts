import * as yup from "yup"
import { SchemaOf } from "yup"
import { IMedicoRequest } from "../interfaces/medicos"

export const newDoctorSchema: SchemaOf<IMedicoRequest> = yup.object().shape({
  nome: yup.string().required(),
  email: yup.string().email().required(),
  senha: yup.string().required().min(6, "A senha deve conter no mínimo 6 caracteres!"),
  categoria: yup.string().required(),
})
