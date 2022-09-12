import AppDataSource from "../../data-source";
import { Paciente } from "../../entities/paciente.entity";
import { AppError } from "../../errors/AppError";
import { IPacienteUpdate } from "../../interfaces/pacientes";

export const patientUpdateService = async (id: string, data: IPacienteUpdate) => {
  const doctorRepository = AppDataSource.getRepository(Paciente);

  const doctor = await doctorRepository.findOne({
    where: {
      id,
    },
  });

  if (!doctor) {
    throw new AppError("Doctor not Found!", 404);
  }

  if (
    data.categoria === "R1" ||
    data.categoria === "R2" ||
    data.categoria === "R3"
  ) {
    data.adm = false;
  } else if (data.categoria === "R4" || data.categoria === "Professor") {
    data.adm = true;
  }

  const updatedDoctor = {
    ...doctor,
    ...data,
    atualizadoEm: new Date(),
  };

  await doctorRepository.save(updatedDoctor);

  return updatedDoctor;
};