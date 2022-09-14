import { Request, Response } from "express";
import { chartInsertDoctorService } from "../../services/prontuarios/chartInsertDoctors.service";

export const chartInsertDoctorController = async (req: Request, res: Response) =>{
    const userId= req.body.id
    const {id} = req.params
    
    const chart = await chartInsertDoctorService(userId, id)

    return res.status(200).json(chart)
}