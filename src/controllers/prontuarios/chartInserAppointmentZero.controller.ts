import { Request, Response } from "express";
import { chartInsertAppointmentZeroService } from "../../services/prontuarios/chartInsertAppointmentZero.service";

export const chartInsertAppointmentZeroController = async (
  req: Request,
  res: Response
) => {
  const appointmentZeroId = req.body.id;
  const { id } = req.params;

  const chart = await chartInsertAppointmentZeroService(appointmentZeroId, id);

  return res.status(200).json(chart);
};
