import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";
import { ExamesDeImagem } from "../../entities/examesImagem.entity";
import { IImageExamesRequest } from "../../interfaces/examesImagem";

export const updateImageExamsService = async (
  id: string,
  { anexos, laudo }: IImageExamesRequest
) => {
  const imageExamsRepository = AppDataSource.getRepository(ExamesDeImagem);

  const exam = await imageExamsRepository.findOneBy({ id });

  if (!exam) {
    throw new AppError("Exam not found!", 404);
  }

  exam.anexos = anexos || exam.anexos;
  exam.laudo = laudo || exam.laudo;
  exam.atualizadoEm = new Date();

  await imageExamsRepository.save(exam);

  return exam;
};
