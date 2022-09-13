// Responsável por retornar todas os prontuarios

import { Request, Response } from "express";
import { allChartListService } from "../../services/prontuarios/chartList.service";

export const allChartsListController = async (req: Request, res: Response) => {
  const allCharts = await allChartListService();

  return res.json(allCharts);
};
