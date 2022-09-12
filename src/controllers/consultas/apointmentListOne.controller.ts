import { Request, Response } from "express";

import apointmentListService from "../../services/consultas/apointmentList.service";

const apointmentListOneController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const apointments = await apointmentListService();

  const apointment = apointments.find((apointment) => apointment.id === id);

  if (apointment) {
    return res.status(200).send(apointment);
  }
  return res.status(404).send({ message: "could not find apointment" });
};

export default apointmentListOneController;
