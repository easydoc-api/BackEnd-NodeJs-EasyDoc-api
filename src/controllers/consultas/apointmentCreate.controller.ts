import { Request, Response } from 'express'
import appointmentZeroCreateService from '../../services/consultasZero/consultaZeroCreate.service'

export const appointmentCreateController = async (req: Request, res: Response) => {
  
    const newAppointment = await appointmentZeroCreateService(req.body)
    
    return res.status(201).send(newAppointment)
}
