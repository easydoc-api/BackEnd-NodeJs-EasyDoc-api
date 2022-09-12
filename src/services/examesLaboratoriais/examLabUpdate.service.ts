import AppDataSource from "../../data-source";
import { ExamesLaboratoriais } from "../../entities/examesLaboratoriais.entity";

import { AppError } from "../../errors/AppError";
import { ILabExamesRequest } from "../../interfaces/examesLaboratoriais";

export const examLabUpdateService = async (
  id: string,
  data: ILabExamesRequest
) => {
  const examLabRepository = AppDataSource.getRepository(ExamesLaboratoriais);

  const selectedExamLab = await examLabRepository.findOne({
    where: {
      id,
    },
  });

  if (!selectedExamLab) {
    throw new AppError("Laboratory Exam not found!", 404);
  }

  const updatedLabExam = {
    ...selectedExamLab,
    ...data,
  };

  await examLabRepository.save(updatedLabExam);

  return updatedLabExam;
};
