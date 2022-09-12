import { Request, Response } from "express"
import { AppError } from "../../errors/AppError"
import { listImageExamsByIdService } from "../../services/examesImagem/listImageExamsByID.service"

export const listImageExamsByIdController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params

  const idValid = id.match(
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/
  )

  if (!idValid) {
    throw new AppError("Id inválido", 422)
  }
  const exam = await listImageExamsByIdService(id)

  return res.json(exam)
}
