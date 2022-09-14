import AppDataSource from "../../data-source";
import { ConsultaZero } from "../../entities/consultaZero.entity";
import { Prontuario } from "../../entities/prontuario.entity";
import { AppError } from "../../errors/AppError";

export const chartInsertAppointmentZeroService = async (
  appointmentZeroId: string,
  id: string
) => {
  const chartRepository = AppDataSource.getRepository(Prontuario);
  const appointmentZeroRepository = AppDataSource.getRepository(ConsultaZero);

  const chartSelected = await chartRepository.findOne({
    where: {
      id,
    },
    relations: {
      consultaZero: true,
    },
  });

  //console.log(chartSelected);

  const apppointmentZeroSelected = await appointmentZeroRepository.findOne({
    where: {
      id: appointmentZeroId,
    },
  });

  //console.log(apppointmentZeroSelected);

  if (!chartSelected || !apppointmentZeroSelected) {
    throw new AppError("Chart not found!", 404);
  }

  await chartRepository.save({
    ...chartSelected,
    consultaZero: apppointmentZeroSelected,
  });

  const updatedChar = await chartRepository.findOne({
    where: {
      id,
    },
  });

  console.log(updatedChar);

  if (!updatedChar) {
    throw new AppError("Not found", 404);
  }

  return updatedChar;
};
