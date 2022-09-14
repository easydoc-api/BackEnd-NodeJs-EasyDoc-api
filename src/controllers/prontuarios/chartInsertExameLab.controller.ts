import { Request, Response } from "express";
import { chartInsertExameLabService } from "../../services/prontuarios/chartInsertExameLab.service";

export const chartInsertExameLabController = async (req: Request, res: Response) =>{
    const exameLabId = req.body.id
    const { id } = req.params
    
    const chart = await chartInsertExameLabService(exameLabId, id)

    return res.status(200).json(chart)
}