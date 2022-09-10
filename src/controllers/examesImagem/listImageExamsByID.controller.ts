import { Request, Response } from "express"
import { listImageExamsByIdService } from "../../services/examesImagem/listImageExamsByID.service"

export const listImageExamsByIdController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params
  const exam = await listImageExamsByIdService(id)

  return res.json(exam)
}
