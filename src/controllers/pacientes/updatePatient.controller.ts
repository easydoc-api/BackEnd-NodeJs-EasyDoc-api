import { Request, Response } from "express";
import { patientUpdateService } from "../../services/pacientes/updatePatient.service";

export const patientUpdateController = async (req: Request, res: Response) =>{
    const {id} = req.params
    const data = req.body

    const updatedPatient = await patientUpdateService(id, data)

    return res.status(200).json(updatedPatient)
}