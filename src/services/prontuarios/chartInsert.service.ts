import AppDataSource from "../../data-source"
import { Consulta } from "../../entities/consulta.entity"
import { ConsultaZero } from "../../entities/consultaZero.entity"
import { ExamesDeImagem } from "../../entities/examesImagem.entity"
import { ExamesLaboratoriais } from "../../entities/examesLaboratoriais.entity"
import { Medico } from "../../entities/medico.entity"
import { Paciente } from "../../entities/paciente.entity"
import { Prontuario } from "../../entities/prontuario.entity"
import { AppError } from "../../errors/AppError"
import { IProntuarioRequest } from "../../interfaces/prontuarios"
import {IMedicoChart} from "../../interfaces/medicos"

export const chartInsertService = async (data : IProntuarioRequest, id : string) => {
  const chartRepository = AppDataSource.getRepository(Prontuario)

  const chartSelected = await chartRepository.findOne({where:{
    id
  }})

  // const zeroApointmentRepository = AppDataSource.getRepository(ConsultaZero)
  // const zeroApointmentAlreadyExists = await zeroApointmentRepository.findOne({})
  // const patientAlreadyExists = await patientRepository.findOne({})

  // if (zeroApointmentAlreadyExists) {
  //   throw new AppError(
  //     "Já existe uma consulta zero cadastrada para esse paciente"
  //   )
  // }

  // if (patientAlreadyExists) {
  //   throw new AppError("O prontuário já está relacionado a um paciente")
  // }

  const updatedChart = await chartRepository.save({
    ...chartSelected,
    ...data,
  })

  return updatedChart
}
