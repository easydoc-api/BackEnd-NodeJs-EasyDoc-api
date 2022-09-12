import { Request, Response } from "express";

import { apointmentCreateService } from "../../services/consultas/apointmentCreate.service";

import apointmentListService from "../../services/consultas/apointmentList.service";

const apointmentListController = async (req: Request, res: Response) => {
  const newAppoint = await apointmentListService();

  return res.status(201).send(newAppoint);
};

export default apointmentListController;
