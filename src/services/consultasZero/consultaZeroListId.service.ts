import AppDataSource from "../../data-source";
import { ConsultaZero } from "../../entities/consultaZero.entity";
import { AppError } from "../../errors/AppError";

export const appointmentZeroListIdService = async (id: string) => {
  const appointmentZeroRepository = AppDataSource.getRepository(ConsultaZero);

  const appointmentZero = await appointmentZeroRepository.findOne({
    where: {
      id,
    },
  });

  if (!appointmentZero) {
    throw new AppError("Consulta não encontrada", 404);
  }

  return appointmentZero;
};
