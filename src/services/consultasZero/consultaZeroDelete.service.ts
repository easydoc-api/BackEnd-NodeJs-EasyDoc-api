import AppDataSource from "../../data-source";
import { ConsultaZero } from "../../entities/consultaZero.entity";
import { AppError } from "../../errors/AppError";

export const apointmentZeroDeleteService = async (id: string) => {
  const apointmentZeroRepository = AppDataSource.getRepository(ConsultaZero);

  const apointmentZero = await apointmentZeroRepository.find();

  const target = apointmentZero.find((apointment) => apointment.id === id);

  if (!target) {
    throw new AppError("Appointment Zero dont exists", 404);
  }

  target.estaAtivo = false

  await apointmentZeroRepository.save(target)

  return target;
};
