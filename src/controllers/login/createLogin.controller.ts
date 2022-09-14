import { Request, Response } from "express"
import { createLoginService } from "../../services/login/createLogin.service"

export const createLoginController = async (req: Request, res: Response) => {
  const doctorData = req.body

  const token = await createLoginService(doctorData)

  return res.json({ token })
}
