import { Request, Response } from "express"
import { listImageExamsService } from "../../services/examesImagem/listImageExams.service"

export const listImageExamsController = async (
  req: Request,
  res: Response
) => {
  const imageExams = await listImageExamsService()
  return res.json(imageExams)
}
