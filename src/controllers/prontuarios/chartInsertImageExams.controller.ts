import { Request, Response } from "express"
import { chartInsertImageExamsService } from "../../services/prontuarios/chartInsertImageExams.service"

export const chartInsertImageExamsController = async (
  req: Request,
  res: Response
) => {
  const userId = req.body.id
  const { id } = req.params

  const chart = await chartInsertImageExamsService(userId, id)

  return res.status(200).json(chart)
}
