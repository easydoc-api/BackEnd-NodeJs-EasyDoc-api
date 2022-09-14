import { Request, Response } from "express"
import { AppError } from "../../errors/AppError"
import { deleteImageExamService } from "../../services/examesImagem/deleteImageExams.service"

export const deleteImageExamsController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params
  const idValid = id.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)

  if(!idValid){
      throw new AppError("Id inválido", 422);
  }

  await deleteImageExamService(id)
  
  return res.status(204).json({ message: "Exam deleted successfully!" })
}
