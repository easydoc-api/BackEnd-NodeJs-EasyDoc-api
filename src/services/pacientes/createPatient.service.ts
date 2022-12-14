import AppDataSource from "../../data-source"
import { Paciente } from "../../entities/paciente.entity"
import { AppError } from "../../errors/AppError"
import { IPacienteRequest } from "../../interfaces/pacientes"
import { Prontuario } from "../../entities/prontuario.entity"

export const patientCreateService = async ({
  cidadeOrigem,
  cpf,
  dataNascimento,
  diagnostico,
  idade,
  nome,
  cariotipo,
  email,
  nomeBebe,
  nomePai,
  procedimentos,
  arquivos_id,
}: IPacienteRequest) => {
  const patientRepository = AppDataSource.getRepository(Paciente)

  const patientAlreadyExists = await patientRepository.findOne({
    where: {
      cpf: cpf,
    },
  })

  if (patientAlreadyExists) {
    throw new AppError("Patient is already registered!", 409)
  }

  const chartRepository = AppDataSource.getRepository(Prontuario)

  const newPatient = patientRepository.create({
    nome,
    cariotipo,
    cidadeOrigem,
    cpf,
    dataNascimento,
    email,
    diagnostico,
    idade,
    nomeBebe,
    nomePai,
    procedimentos,
    arquivos_id,
  })
  const newPront = chartRepository.create({
    paciente: newPatient
  })
  await chartRepository.save(newPront)
  return newPront.paciente
}
