import { Request, Response } from "express";
import { doctorListService } from "../../services/medicos/doctorList.service";

export const doctorListController = async (req: Request, res: Response) =>{
    const employees = await doctorListService()

    return res.json(employees)
}