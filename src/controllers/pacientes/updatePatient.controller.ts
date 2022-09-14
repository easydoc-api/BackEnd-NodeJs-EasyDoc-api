import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { patientUpdateService } from "../../services/pacientes/updatePatient.service";

export const patientUpdateController = async (req: Request, res: Response) =>{
    const {id} = req.params
    const data = req.body

    const idValid = id.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)

    if(!idValid){
        throw new AppError("Id inválido", 422);
    }

    const updatedPatient = await patientUpdateService(id, data)

    return res.status(200).json(updatedPatient)
}