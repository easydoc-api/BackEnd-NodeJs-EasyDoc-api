import AppDataSource from "../../data-source"
import { Medico } from "../../entities/medico.entity"
import { IMedicoLogin } from "../../interfaces/medicos"
import { AppError } from "../../errors/AppError"
import { compare } from "bcryptjs"
import jwt from "jsonwebtoken"

export const createLoginService = async ({email, senha}: IMedicoLogin): Promise<string> => {

  const doctorRepository = AppDataSource.getMongoRepository(Medico)
  const doctor = await doctorRepository.findOneBy({email})

  if(doctor?.estaAtivo == false){
    throw new AppError("Este usuário não está ativo!")
  }

  if(!doctor){
    throw new AppError("Email ou senha inválidos!", 401)
  }

  return ""
}