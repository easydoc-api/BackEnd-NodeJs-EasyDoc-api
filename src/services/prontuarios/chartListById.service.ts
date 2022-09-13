// Responsável por retornar um prontuario expecífico por ID

import AppDataSource from "../../data-source";
import { Prontuario } from "../../entities/prontuario.entity";
import { AppError } from "../../errors/AppError";

export const chartListByIdService = async (id: string) => {
  const chartRepository = AppDataSource.getRepository(Prontuario);

  const selectedChart = await chartRepository.findOne({
    where: {
      id,
    },
  });

  if (!selectedChart) {
    throw new AppError("Chart not found!", 404);
  }

  return selectedChart;
};
