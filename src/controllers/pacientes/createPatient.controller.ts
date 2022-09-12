import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { patientCreateService } from "../../services/pacientes/createPatient.service";

export const patientCreateController = async (req: Request, res: Response) => {
  const {
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
  } = req.body;

  const createdPatient = await patientCreateService({
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
  });

  return res.status(201).json(instanceToPlain(createdPatient));
};
