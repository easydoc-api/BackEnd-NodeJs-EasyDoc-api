import { Request, Response } from "express"
import { deleteImageExamService } from "../../services/examesImagem/deleteImageExams.service"

export const deleteImageExamsController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params
  const exam = await deleteImageExamService(id)

  return res.status(200).json({ message: "Exam deleted successfully!" })
}
