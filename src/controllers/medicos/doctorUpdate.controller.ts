import { Request, Response } from "express";
import { doctorUpdateService } from "../../services/medicos/doctorUpdate.service";

export const doctorUpdateController = async (req: Request, res: Response) =>{
    const {id} = req.params
    const data = req.body

    const updatedDoctor = await doctorUpdateService(id, data)

    return res.status(200).json(updatedDoctor)
}