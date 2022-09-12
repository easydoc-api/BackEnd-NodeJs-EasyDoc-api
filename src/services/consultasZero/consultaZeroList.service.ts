import AppDataSource from "../../data-source";
import { ConsultaZero } from "../../entities/consultaZero.entity";

export const appointmentZeroListService = async () => {
  const appointmentZeroRepository = AppDataSource.getRepository(ConsultaZero)

  const appointmentZero = appointmentZeroRepository.find()

  return appointmentZero
}