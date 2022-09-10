import AppDataSource from "../../data-source"
import { ExamesDeImagem } from "../../entities/examesImagem.entity"
import { AppError } from "../../errors/AppError"

export const deleteImageExamService = async (id: string) => {
  const imageExamsRepository = AppDataSource.getRepository(ExamesDeImagem)

  const exam = await imageExamsRepository.findOneBy({ id })

  if (!exam) {
    throw new AppError("Exam not found!", 404)
  }

  await imageExamsRepository.delete({ id })

  return true
}
