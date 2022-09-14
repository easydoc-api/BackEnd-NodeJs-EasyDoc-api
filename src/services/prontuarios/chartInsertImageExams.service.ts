import AppDataSource from "../../data-source"
import { ExamesDeImagem } from "../../entities/examesImagem.entity"
import { Prontuario } from "../../entities/prontuario.entity"
import { AppError } from "../../errors/AppError"

export const chartInsertImageExamsService = async (
  userId: string,
  id: string
) => {
  const chartRepository = AppDataSource.getRepository(Prontuario)
  const imageExamsRepository = AppDataSource.getRepository(ExamesDeImagem)

  const chartSelected = await chartRepository.findOne({
    where: {
      id,
    },
    relations: {
      examesImagem: true,
    },
  })

  const imageExamSelected = await imageExamsRepository.findOne({
    where: {
      id: userId,
    },
  })

  if (!chartSelected) {
    throw new AppError("Chart not found!", 404)
  }

  await imageExamsRepository.save({
    ...imageExamSelected,
    prontuario: chartSelected,
  })

  const updatedChar = await chartRepository.findOne({
    where: {
      id,
    },
  })

  if (!updatedChar) {
    throw new AppError("Not found", 404)
  }

  return updatedChar
}
