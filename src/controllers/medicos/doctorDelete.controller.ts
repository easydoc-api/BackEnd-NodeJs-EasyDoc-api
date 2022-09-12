import { Request, Response } from "express"
import { doctorDeleteService } from "../../services/medicos/doctorDelete.service"

export const doctorDeleteController = async (req: Request, res: Response) =>{
    const {id} = req.params

    const disableDoctor = await doctorDeleteService(id)

    return res.status(204).json(disableDoctor)
}