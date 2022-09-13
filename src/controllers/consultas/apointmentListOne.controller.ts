import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";

import {apointmentListService} from "../../services/consultas/apointmentList.service";

export const apointmentListOneController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const idValid = id.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)

    if(!idValid){
        throw new AppError("Id inválido", 422);
    }

  const apointments = await apointmentListService();

  const apointment = apointments.find((apointment) => apointment.id === id);

  if (apointment) {
    return res.status(200).send(apointment);
  }else{
    throw new AppError("could not find patient",  404)
  }
};

