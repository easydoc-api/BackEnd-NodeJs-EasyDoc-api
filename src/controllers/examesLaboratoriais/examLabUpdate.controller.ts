import { Request, Response } from "express";
import { examLabUpdateService } from "../../services/examesLaboratoriais/examLabUpdate.service";

export const examLabUpdateController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;

  const updatedLabExam = await examLabUpdateService(id, data);

  return res.status(200).json(updatedLabExam);
};
