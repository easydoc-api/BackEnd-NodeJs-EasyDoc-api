import { Request, Response } from 'express'
import { AppError } from '../../errors/AppError'
import appointmentZeroCreateService from '../../services/consultasZero/consultaZeroCreate.service'

const appointmentZeroCreateController = async (req: Request, res: Response) => {
  try {
    const {paridade, consanguinidade, idadeGestacional, dataMenstruacao, primeiroUltrassom, semanaGestacional, diaGestacional, historiaPregressa, historiaGinecologicaObstetrica} = req.body

    const newAppointmentZero = await appointmentZeroCreateService({paridade, consanguinidade, idadeGestacional, dataMenstruacao, primeiroUltrassom, semanaGestacional, diaGestacional, historiaPregressa, historiaGinecologicaObstetrica})
    
    return res.status(201).send(newAppointmentZero)

  } catch (error) {
    if(error instanceof AppError){
      console.log('test')
    }
  }
}

export default appointmentZeroCreateController