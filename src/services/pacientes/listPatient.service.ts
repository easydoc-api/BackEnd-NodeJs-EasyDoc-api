import AppDataSource from "../../data-source";
import { Paciente } from "../../entities/paciente.entity";
import { AppError } from "../../errors/AppError";

export const patientListOneService = async (id: string) => {
  const patientRepository = AppDataSource.getRepository(Paciente);

  const selectedPatient = await patientRepository.findOne({
    where: {
      id
    },
  });

  if (!selectedPatient) {
    throw new AppError("Patient not found!", 404);
  }

  return selectedPatient;
};