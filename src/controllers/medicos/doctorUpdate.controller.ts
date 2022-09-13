import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { doctorUpdateService } from "../../services/medicos/doctorUpdate.service";

export const doctorUpdateController = async (req: Request, res: Response) =>{
    const {id} = req.params
    const data = req.body
    const doctorId = req.user.id
    const adm = req.user.adm

    const idValid = id.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)

    if(!idValid){
        throw new AppError("Id inválido", 422);
    }

    const updatedDoctor = await doctorUpdateService(id, data, doctorId, adm)

    return res.status(200).json(instanceToPlain(updatedDoctor))
}