// Retorna uma lista com todos os pacientes cadastrados

import { Request, Response } from "express";
import { patientListService } from "../../services/pacientes/patientList.service";

export const patientListController = async (req: Request, res: Response) =>{
    const patients = await patientListService()

    return res.json(patients)
}