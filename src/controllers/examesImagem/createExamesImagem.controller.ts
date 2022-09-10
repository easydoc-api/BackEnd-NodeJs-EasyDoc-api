import { Request, Response } from "express"
import { createImageExamsService } from "../../services/examesImagem/createExamesImagem.service"

export const createImageExamsController = async (
  req: Request,
  res: Response
) => {
  const { anexos, laudo } = req.body

  const newImageExam = await createImageExamsService({ anexos, laudo })

  return res.status(201).json(newImageExam)
}
