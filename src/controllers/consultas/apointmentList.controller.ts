import { Request, Response } from "express";

import {apointmentListService} from "../../services/consultas/apointmentList.service";

export const apointmentListController = async (req: Request, res: Response) => {
  const newAppoint = await apointmentListService();

  return res.status(200).send(newAppoint);
};

