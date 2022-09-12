import AppDataSource from "../../data-source";
import { Medico } from "../../entities/medico.entity";
import { AppError } from "../../errors/AppError";

export const doctorListOneByIdService = async (id: string) => {
  
  const doctorRepository = AppDataSource.getRepository(Medico);

  const selectedDoctor = await doctorRepository.findOne({
    where: {
      id
    },
  });

  if (!selectedDoctor) {
    throw new AppError("Doctor not found!", 404);
  }

  return selectedDoctor;
};
