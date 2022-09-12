import { Request, Response } from "express";
import { examLabListOneByIdService } from "../../services/examesLaboratoriais/examLabListById.service";

export const examLabListOneByIdController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  const examLab = await examLabListOneByIdService(id);

  return res.json(examLab);
};
