import { Request, Response } from "express"
import { appointmentZeroListService } from "../../services/consultasZero/consultaZeroList.service"

export const appointmentZeroListController = async (req: Request, res: Response) => {
  const appointmentZero = await appointmentZeroListService()

  return res.status(200).send(appointmentZero)
}