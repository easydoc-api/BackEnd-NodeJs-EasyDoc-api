// Retorna o paciente expecifico por ID

import { Request, Response } from "express";
import { patientListOneService } from "../../services/pacientes/listPatient.service";

export const patientListOneController = async (req: Request, res: Response) =>{
    const {id} = req.params;

    const patient = await patientListOneService(id)

    return res.json(patient)
}