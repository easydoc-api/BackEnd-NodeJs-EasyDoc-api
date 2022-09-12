import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { doctorListOneByIdService } from "../../services/medicos/doctorListById.service";

export const doctorListOneByIdController = async (req: Request, res: Response) =>{
    const {id} = req.params;
    
    const idValid = id.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)

    if(!idValid){
        throw new AppError("Id inválido", 422);
    }

    const doctor = await doctorListOneByIdService(id)

    return res.json(doctor)
}