import { Request, Response } from "express";
import { chartDeleteService } from "../../services/prontuarios/chartDelete.service";

export const chartDeleteController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const disableChart = await chartDeleteService(id);

  return res.status(204).json(disableChart);
};
