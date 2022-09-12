import { Request, Response } from "express";
import { apointmentCreateService } from "../../services/consultas/apointmentCreate.service";

export const appointmentCreateController = async (req: Request, res: Response) => {
  const newAppoint = await apointmentCreateService(req.body);

  return res.status(201).send(newAppoint);
};

