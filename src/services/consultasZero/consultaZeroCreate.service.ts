import AppDataSource from "../../data-source"
import { ConsultaZero } from "../../entities/consultaZero.entity"
import { Prontuario } from "../../entities/prontuario.entity"
import { AppError } from "../../errors/AppError"
import { IConsultZeroRequest } from "../../interfaces/consultasZero"

export const appointmentZeroCreateService = async ({
  paridade,
  consanguinidade,
  idadeGestacional,
  dataMenstruacao,
  primeiroUltrassom,
  semanaGestacional,
  diaGestacional,
  historiaPregressa,
  historiaGinecologicaObstetrica,
}: IConsultZeroRequest) => {
  const appointmentZeroRepository = AppDataSource.getRepository(ConsultaZero)
  const chartRepository = AppDataSource.getRepository(Prontuario)

  const appointmentZero = appointmentZeroRepository.create({
    paridade,
    consanguinidade,
    idadeGestacional,
    dataMenstruacao,
    primeiroUltrassom,
    semanaGestacional,
    diaGestacional,
    historiaPregressa,
    historiaGinecologicaObstetrica,
    
  })

  await appointmentZeroRepository.save(appointmentZero)

  return appointmentZero
}
