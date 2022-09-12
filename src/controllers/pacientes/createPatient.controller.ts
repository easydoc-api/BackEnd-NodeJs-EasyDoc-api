import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { IPacienteRequest } from "../../interfaces/pacientes";
import { patientCreateService } from "../../services/pacientes/createPatient.service";

export const patientCreateController = async (req: Request, res: Response) => {

  const data = req.body
  const createdPatient = await patientCreateService(data);

  return res.status(201).json(instanceToPlain(createdPatient));
};
