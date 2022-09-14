import { Request, Response } from "express";
import { chartInsertService } from "../../services/prontuarios/chartInsert.service";

export const chartInsertServiceController = async (req: Request, res: Response) =>{
    const data = req.body
    const {id} = req.params
    const chart = await chartInsertService(data, id)

    return chart
}