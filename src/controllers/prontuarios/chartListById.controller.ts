// Responsável por retornar um prontuario expecífico por ID

import { Request, Response } from "express";
import { chartListByIdService } from "../../services/prontuarios/chartListById.service";

export const chartListByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const chart = await chartListByIdService(id);

  return res.json(chart);
};
