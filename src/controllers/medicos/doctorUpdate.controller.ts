import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { doctorUpdateService } from "../../services/medicos/doctorUpdate.service";

export const doctorUpdateController = async (req: Request, res: Response) =>{
    const {id} = req.params
    const data = req.body
    const doctorId = req.user.id
    const adm = req.user.adm

    const updatedDoctor = await doctorUpdateService(id, data, doctorId, adm)

    return res.status(200).json(instanceToPlain(updatedDoctor))
}