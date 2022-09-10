import { Request, Response } from "express"
import { updateImageExamsService } from "../../services/examesImagem/updateImageExams.service"

export const updateImageExamsController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params
  const { anexos, laudo } = req.body

  const updatedImageExams = await updateImageExamsService({ id, anexos, laudo })

  return res.status(200).json(updatedImageExams)
}
