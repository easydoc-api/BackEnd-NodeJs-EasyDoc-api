import { Request, Response } from "express";
import { examLabDeleteService } from "../../services/examesLaboratoriais/examLabDelete.service";

export const examLabDeleteController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const disableExamLab = await examLabDeleteService(id);

  return res.status(204).json(disableExamLab);
};
