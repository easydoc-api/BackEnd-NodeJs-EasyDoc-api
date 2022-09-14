import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { patientListOneService } from "../../services/pacientes/listPatient.service";

export const patientListOneController = async (req: Request, res: Response) =>{
    const {id} = req.params;

    const idValid = id.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)

    if(!idValid){
        throw new AppError("Id inválido", 422);
    }

    const patient = await patientListOneService(id)

    return res.json(patient)
}