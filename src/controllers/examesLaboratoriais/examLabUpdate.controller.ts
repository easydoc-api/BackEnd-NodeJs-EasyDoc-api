import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { examLabUpdateService } from "../../services/examesLaboratoriais/examLabUpdate.service";

export const examLabUpdateController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;

  const idValid = id.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)

    if(!idValid){
        throw new AppError("Id inválido", 422);
    }

  const updatedLabExam = await examLabUpdateService(id, data);

  return res.status(200).json(updatedLabExam);
};
