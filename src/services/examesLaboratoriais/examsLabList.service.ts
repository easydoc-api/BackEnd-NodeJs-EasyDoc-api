import AppDataSource from "../../data-source";
import { ExamesLaboratoriais } from "../../entities/examesLaboratoriais.entity";

export const examsLabListService = () => {
  const examLabRepository = AppDataSource.getRepository(ExamesLaboratoriais);

  const examsLab = examLabRepository.find();

  return examsLab;
};
