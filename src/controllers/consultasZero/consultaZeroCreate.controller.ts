import { Request, Response } from 'express'
import { AppError } from '../../errors/AppError'
import { appointmentZeroCreateService } from '../../services/consultasZero/consultaZeroCreate.service'

export const appointmentZeroCreateController = async (req: Request, res: Response) => {
  
    const { paridade, consanguinidade, idadeGestacional, dataMenstruacao, primeiroUltrassom, semanaGestacional, diaGestacional, historiaPregressa, historiaGinecologicaObstetrica } = req.body

    const newAppointmentZero = await appointmentZeroCreateService({paridade, consanguinidade, idadeGestacional, dataMenstruacao, primeiroUltrassom, semanaGestacional, diaGestacional, historiaPregressa, historiaGinecologicaObstetrica})
    
    return res.status(201).send(newAppointmentZero)
}
