import AppDataSource from "../../data-source";
import { ExamesLaboratoriais } from "../../entities/examesLaboratoriais.entity";

import { AppError } from "../../errors/AppError";

export const examLabDeleteService = async (id: string) => {
  const examLabRepository = AppDataSource.getRepository(ExamesLaboratoriais);

  const selectedExamLab = await examLabRepository.findOne({
    where: {
      id,
    },
  });

  if (!selectedExamLab) {
    throw new AppError("Laboratory Exam not found!", 404);
  }

  if (!selectedExamLab.estaAtivo) {
    throw new AppError("Laboratory Exam is not active!", 400);
  }

  selectedExamLab.estaAtivo = false;

  await examLabRepository.save(selectedExamLab);
};
