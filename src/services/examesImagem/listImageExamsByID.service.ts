import AppDataSource from "../../data-source"
import { ExamesDeImagem } from "../../entities/examesImagem.entity"
import { AppError } from "../../errors/AppError"

export const listImageExamsByIdService = async (id: string) => {
  const imageExamsRepository = AppDataSource.getRepository(ExamesDeImagem)

  const findExams = await imageExamsRepository.findOne({
    where: {
      id,
    },
  })

  if (!findExams) {
    throw new AppError("Exam not found!", 404)
  }

  return findExams
}
