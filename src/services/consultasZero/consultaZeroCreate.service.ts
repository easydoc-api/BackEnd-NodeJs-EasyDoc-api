import AppDataSource from "../../data-source";
import { ConsultaZero } from "../../entities/consultaZero.entity";
import { AppError } from "../../errors/AppError";
import { IConsultZeroRequest } from "../../interfaces/consultasZero"

export const appointmentZeroCreateService = async ({paridade, consanguinidade, idadeGestacional, dataMenstruacao, primeiroUltrassom, semanaGestacional, diaGestacional, historiaPregressa, historiaGinecologicaObstetrica}: IConsultZeroRequest) => {

  const appointmentZeroRepository = AppDataSource.getRepository(ConsultaZero)

  const zeroAppointment = await appointmentZeroRepository.find()

  const zeroAppointmentAlredyExists = await appointmentZeroRepository.findOneBy({
  })

  if(zeroAppointmentAlredyExists){
    throw new AppError("Consulta zero já cadastrada", 401) 
  }

  const appointmentZero = appointmentZeroRepository.create({
    paridade,
    consanguinidade,
    idadeGestacional,
    dataMenstruacao,
    primeiroUltrassom,
    semanaGestacional,
    diaGestacional,
    historiaPregressa,
    historiaGinecologicaObstetrica
  })

  await appointmentZeroRepository.save(appointmentZero)

  return appointmentZero
}
