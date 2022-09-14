import { Request, Response } from "express";
import { chartInsertApointmentService } from "../../services/prontuarios/chartInsertApointment.service";

export const chartInsertApointmentController = async (req: Request, res: Response) =>{
    const apointmentId= req.body.id
    const {id} = req.params

    const chart = await chartInsertApointmentService(apointmentId, id)

    return res.status(200).json(chart)
}