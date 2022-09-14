import { Request, Response } from "express"
import { AppError } from "../../errors/AppError"
import { updateImageExamsService } from "../../services/examesImagem/updateImageExams.service"

export const updateImageExamsController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params
  const { anexos, laudo } = req.body

  const idValid = id.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)

    if(!idValid){
        throw new AppError("Id inválido", 422);
    }

  const updatedImageExams = await updateImageExamsService( id, {anexos, laudo })

  return res.status(200).json(updatedImageExams)
}
