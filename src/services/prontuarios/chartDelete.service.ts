import AppDataSource from "../../data-source";
import { Prontuario } from "../../entities/prontuario.entity";
import { AppError } from "../../errors/AppError";

export const chartDeleteService = async (id: string) => {
  const chartRepository = AppDataSource.getRepository(Prontuario);

  const chart = await chartRepository.findOne({
    where: {
      id,
    },
  });

  if (!chart) {
    throw new AppError("Chart not Found!", 404);
  }

  if (!chart.estaAtivo) {
    throw new AppError("Chart is not active!", 400);
  }

  chart.estaAtivo = false;

  await chartRepository.save(chart);
};
