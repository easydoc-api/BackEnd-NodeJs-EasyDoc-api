import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { examLabListOneByIdService } from "../../services/examesLaboratoriais/examLabListById.service";

export const examLabListOneByIdController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  const idValid = id.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)

    if(!idValid){
        throw new AppError("Id inválido", 422);
    }

  const examLab = await examLabListOneByIdService(id);

  return res.json(examLab);
};
