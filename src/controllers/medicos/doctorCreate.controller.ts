import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { doctorCreateService } from "../../services/medicos/doctorCreate.service";

export const doctorCreateController = async (req: Request, res: Response) =>{
    const {nome, email, senha, categoria} = req.body

    const createdDoctor = await doctorCreateService({nome, email, senha, categoria})

    return res.status(201).json(instanceToPlain(createdDoctor))
}