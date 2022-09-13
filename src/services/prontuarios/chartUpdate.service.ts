import AppDataSource from "../../data-source";
import { Prontuario } from "../../entities/prontuario.entity";
import { AppError } from "../../errors/AppError";
import { IProntuarioRequest } from "../../interfaces/prontuarios";

export const chartUpdateService = async (
  id: string,
  data: IProntuarioRequest
) => {
  const chartRepository = AppDataSource.getRepository(Prontuario);
  const chart = await chartRepository.findOne({
    where: {
      id,
    },
  });
  if (!chart) {
    throw new AppError("Chart not Found!", 404);
  }
  const updatedChart = {
    ...chart,
    ...data,
  };
  await chartRepository.save(updatedChart);
  return updatedChart;
};
