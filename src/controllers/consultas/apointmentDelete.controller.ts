import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";

import {apointmentDeleteService} from "../../services/consultas/apointmentDelete.service";

export const apointmentDeleteController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const idValid = id.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)

    if(!idValid){
        throw new AppError("Id inválido", 422);
    }
    
  const deleteAppoint = await apointmentDeleteService(id);

  return res.status(204).send(deleteAppoint);
};

