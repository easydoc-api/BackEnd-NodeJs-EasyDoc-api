import { Request, Response } from "express";
import { examLabCreateService } from "../../services/examesLaboratoriais/examLabCreate.service";

export const examLabCreateController = async (req: Request, res: Response) => {
  const examLabData = req.body;

  const createdExam = await examLabCreateService(examLabData);

  return res.status(201).json(createdExam);
};
