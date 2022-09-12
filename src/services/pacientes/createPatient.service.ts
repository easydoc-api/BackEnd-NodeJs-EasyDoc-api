import AppDataSource from "../../data-source";
import { Paciente } from "../../entities/paciente.entity";
import { AppError } from "../../errors/AppError";
import { IPacienteRequest } from "../../interfaces/pacientes";

export const patientCreateService = async ({
  nome,
  cpf,
  email,
  dataNascimento,
  cidadeOrigem,
  idade,
  nomeDoBebe,
  nomeDoPai,
  diagnostico,
  procedimentos,
  cariotipo,
  arquivos_id,
}: IPacienteRequest) => {
  const patientRepository = AppDataSource.getRepository(Paciente);

  const patientAlreadyExists = await patientRepository.findOne({
    where: {
      cpf,
    },
  });

  if (patientAlreadyExists) {
    throw new AppError("Patient is already registered!", 409);
  } else {
    const newPatient = patientRepository.create({
      nome,
      email,
      cpf,
      dataNascimento,
      cidadeOrigem,
      idade,
      nomeDoBebe,
      nomeDoPai,
      diagnostico,
      procedimentos,
      cariotipo,
      arquivos_id,
      estaAtivo: true,
      criadoEm: new Date(),
      atualizadoEm: new Date(),
    });

    await patientRepository.save(newPatient);

    return newPatient;
  }
};
