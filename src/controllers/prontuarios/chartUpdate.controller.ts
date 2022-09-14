import { Request, Response } from "express";
import { chartUpdateService } from "../../services/prontuarios/chartUpdate.service";

export const chartUpdateController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;

  const updatedChart = await chartUpdateService(id, data);

  return res.status(200).json(updatedChart);
};
