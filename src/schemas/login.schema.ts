import * as yup from "yup"
import { SchemaOf } from "yup"
import { IMedicoLogin } from "../interfaces/medicos"

export const loginDoctorSchema: SchemaOf<IMedicoLogin> = yup.object().shape({
  email: yup.string().email().required(),
  senha: yup.string().required().min(6, "A senha deve ter no mínimo 6 caracteres!"),
})
