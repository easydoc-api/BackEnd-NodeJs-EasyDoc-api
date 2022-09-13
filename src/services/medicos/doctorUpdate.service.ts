import AppDataSource from "../../data-source";
import { Medico } from "../../entities/medico.entity";
import { AppError } from "../../errors/AppError";
import { IMedico } from "../../interfaces/medicos";

export const doctorUpdateService = async (
  id: string,
  data: IMedico,
  doctorId: string,
  adm : boolean
) => {
  const doctorRepository = AppDataSource.getRepository(Medico);

  const doctor = await doctorRepository.findOne({
    where: {
      id,
    },
  });

  if (!doctor) {
    throw new AppError("Doctor not Found!", 404);
  }

  if (doctor.id !== doctorId && !adm) {
    throw new AppError("You're not the owner!", 409);
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

  const result = await doctorRepository.findOne({
    where: {
      id,
    },
  });

  return result
};
