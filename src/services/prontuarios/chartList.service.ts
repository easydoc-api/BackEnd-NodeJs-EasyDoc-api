// Responsável por retornar todas os prontuarios

import AppDataSource from "../../data-source";
import { Prontuario } from "../../entities/prontuario.entity";

export const allChartListService = () => {
  const chartsRepository = AppDataSource.getRepository(Prontuario);

  const allCharts = chartsRepository.find();

  return allCharts;
};
