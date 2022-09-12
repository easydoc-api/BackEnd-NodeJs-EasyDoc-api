import { Request, Response } from "express"
import { IEmailRequest } from "../../interfaces/email"
import { sendEmailService } from "../../services/email/sendEmail.service"

export const sendEmailController = async (req: Request, res: Response) => {
  const { subject, text, to }: IEmailRequest = req.body
  await sendEmailService({ subject, text, to })
  return res.json({
    message: "Email sended with success!",
  })
}
