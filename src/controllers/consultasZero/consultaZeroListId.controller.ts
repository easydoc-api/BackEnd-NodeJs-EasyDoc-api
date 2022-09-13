import { Request, Response } from 'express'
import { AppError } from '../../errors/AppError'
import { appointmentZeroListIdService } from '../../services/consultasZero/consultaZeroListId.service'

export const appointmentZeroListIdController = async (req: Request, res: Response) => {
  const { id } = req.params

  const idValid = id.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)

  if(!idValid){
    throw new AppError("Id inválido", 422);
  }

  const appointmentZero = await appointmentZeroListIdService(id)

  return res.status(200).send(appointmentZero)
}