import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { examLabDeleteService } from "../../services/examesLaboratoriais/examLabDelete.service";

export const examLabDeleteController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const idValid = id.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)

    if(!idValid){
        throw new AppError("Id inválido", 422);
    }

  const disableExamLab = await examLabDeleteService(id);

  return res.status(204).json(disableExamLab);
};
