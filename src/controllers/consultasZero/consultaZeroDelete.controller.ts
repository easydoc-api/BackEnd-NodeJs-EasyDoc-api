import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";

import { apointmentZeroDeleteService } from "../../services/consultasZero/consultaZeroDelete.service";

export const apointmentZeroDeleteController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  const idValid = id.match(
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/
  );

  if (!idValid) {
    throw new AppError("Id inválido", 422);
  }

  const deleteAppointZero = await apointmentZeroDeleteService(id);

  return res.status(204).send(deleteAppointZero);
};
