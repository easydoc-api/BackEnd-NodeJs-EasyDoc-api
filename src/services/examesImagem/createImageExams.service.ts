import AppDataSource from "../../data-source"
import { IImageExamesRequest } from "../../interfaces/examesImagem"
import { ExamesDeImagem } from "../../entities/examesImagem.entity"

export const createImageExamsService = async ({
  anexos,
  laudo,
}: IImageExamesRequest) => {
  const imageExamsRepository = AppDataSource.getRepository(ExamesDeImagem)

  const newImageExams = imageExamsRepository.create({
    laudo,
    anexos,
  })

  await imageExamsRepository.save(newImageExams)

  return newImageExams
}
