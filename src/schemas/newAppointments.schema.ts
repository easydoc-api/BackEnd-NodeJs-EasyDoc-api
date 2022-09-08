import * as yup from "yup"
import { SchemaOf } from "yup"
import { IConsultRequest } from "../interfaces/consultas"
import { IConsultZeroRequest } from "../interfaces/consultasZero"

export const newAppointmentSchema: SchemaOf<IConsultRequest> = yup
  .object()
  .shape({
    idadeGestacional: yup.number().required(),
    peso: yup.number().required(),
    pressaoArterial: yup.string().required(),
    uteroFita: yup.string(),
    apresentacao: yup.string(),
    movimentacaoFetal: yup.boolean(),
    batimentoCardFetal: yup.string(),
    edema: yup.string(),
    toqueVaginal: yup.string(),
    conduta: yup.string().required(),
    retorno: yup.string(),
  })

export const newAppointmentZeroSchema: SchemaOf<IConsultZeroRequest> = yup
  .object()
  .shape({
    paridade: yup.string().required(),
    consanguinidade: yup.string().required(),
    idadeGestacional: yup.number().required(),
    dataMenstruacao: yup.string(),
    primeiroUltrassom: yup.string(),
    semanaGestacional: yup.number().required(),
    diaGestacional: yup.number().required(),
    historiaPregressa: yup.string().required(),
    historiaGinecologicaObstetrica: yup.string().required(),
  })
