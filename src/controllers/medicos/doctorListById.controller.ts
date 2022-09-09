import { Request, Response } from "express";
import { doctorListOneByIdService } from "../../services/medicos/doctorListById.service";

export const doctorListOneByIdController = async (req: Request, res: Response) =>{
    const {id} = req.params;

    const doctor = await doctorListOneByIdService(id)

    return res.json(doctor)
}