import { Router, Request, Response } from "express"
import { IEmailRequest } from "../../interfaces/email"
import { sendEmail } from "../../utils/nodemailer.util"

const email = Router()

export const sendEmailRouter = () => {
  email.post("", async (req: Request, res: Response) => {
    try {
      const { subject, text, to }: IEmailRequest = req.body
      await sendEmail({ subject, text, to })
      return res.json({
        message: "Email sended with success!",
      })
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({
          message: error.message,
        })
      }
    }
  })

  return email
}
