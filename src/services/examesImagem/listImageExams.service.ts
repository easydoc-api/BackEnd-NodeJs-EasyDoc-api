import AppDataSource from "../../data-source"
import { ExamesDeImagem } from "../../entities/examesImagem.entity"

export const listImageExamsService = async () => {
  const imageExamsRepository = AppDataSource.getRepository(ExamesDeImagem)

  const imageExams = await imageExamsRepository.find()

  return imageExams
}
