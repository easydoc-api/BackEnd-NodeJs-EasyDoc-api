import AppDataSource from "../../data-source";
import { Paciente } from "../../entities/paciente.entity";
import { AppError } from "../../errors/AppError";
import { IPacienteUpdate } from "../../interfaces/pacientes";
export const patientUpdateService = async (
  id: string,
  data: IPacienteUpdate
) => {
  const patientRepository = AppDataSource.getRepository(Paciente);
  const patient = await patientRepository.findOne({
    where: {
      id,
    },
  });
  if (!patient) {
    throw new AppError("Patient not Found!", 404);
  }
  const updatedPatient = {
    ...patient,
    ...data,
  };
  await patientRepository.save(updatedPatient);
  return updatedPatient;
};
