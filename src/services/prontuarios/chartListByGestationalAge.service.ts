// Responsável por retornar um prontuario expecífico por idade gestacional

import AppDataSource from "../../data-source";
import { Prontuario } from "../../entities/prontuario.entity";
import { ConsultaZero } from "../../entities/consultaZero.entity";
import { AppError } from "../../errors/AppError";

export const chartListByAgeGestationalService = async ({
  id: string,
  consultaZero: { idadeGestacional },
}: Prontuario) => {
  const chartRepository = AppDataSource.getRepository(Prontuario);
  const zeroQueryRepository = AppDataSource.getRepository(ConsultaZero);

  const ageGestational = await chartRepository.findOne({
    where: {},
  });

  if (!ageGestational) {
    throw new AppError("Age Gestational not found", 404);
  }

  return ageGestational;
};
