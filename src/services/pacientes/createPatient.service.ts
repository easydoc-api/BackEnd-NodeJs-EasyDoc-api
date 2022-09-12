import AppDataSource from "../../data-source";
import { Paciente } from "../../entities/paciente.entity";
import { AppError } from "../../errors/AppError";
import { IPacienteRequest } from "../../interfaces/pacientes";

export const patientCreateService = async ({
  cidadeOrigem,
  cpf,
  dataNascimento,
  diagnostico,
  idade,
  nome,
  cariotipo,
  email,
  nomeBebe,
  nomePai,
  procedimentos,
  arquivos,
}: IPacienteRequest) => {
  const patientRepository = AppDataSource.getRepository(Paciente);

  const patientAlreadyExists = await patientRepository.findOne({
    where: {
      cpf: cpf,
    },
  });

  if (patientAlreadyExists) {
    throw new AppError("Patient is already registered!", 409);
  } else {
    const newPatient = patientRepository.create({
      nome,
      cariotipo,
      cidadeOrigem,
      cpf,
      dataNascimento,
      email,
      diagnostico,
      idade,
      nomeBebe,
      nomePai,
      procedimentos,
      arquivos
    });

    await patientRepository.save(newPatient);

    return newPatient;
  }
};
