import { Request, Response } from "express"
import { patientDeleteService } from "../../services/pacientes/deletePatient.service"

export const patientDeleteController = async (req: Request, res: Response) =>{
    const {id} = req.params

    const disabPatient = await patientDeleteService(id)

    return res.status(204).json(disabPatient)
}