import { Request, Response } from "express";

import {apointmentDeleteService} from "../../services/consultas/apointmentDelete.service";

export const apointmentDeleteController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deleteAppoint = await apointmentDeleteService(id);

  return res.status(204).send(deleteAppoint);
};

