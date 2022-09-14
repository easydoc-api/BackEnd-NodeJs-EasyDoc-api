import { hash } from "bcryptjs"
import AppDataSource from "../../data-source"
import { Medico } from "../../entities/medico.entity"
import { AppError } from "../../errors/AppError"
import { IMedicoRequest } from "../../interfaces/medicos"

export const doctorCreateService = async ({
  nome,
  email,
  senha,
  categoria,
}: IMedicoRequest) => {
  const doctorRepository = AppDataSource.getRepository(Medico)

  const doctorAlreadyExists = await doctorRepository.findOne({
    where: {
      email,
    },
  })
 
  if (doctorAlreadyExists) {
    throw new AppError("Doctor is already registered!", 400)
  }
  
  const hashedPassword = await hash(senha, 10)

  if (categoria === "R4" || categoria === "Professor") {
  
    const admDoctor = doctorRepository.create({
      nome,
      email,
      senha: hashedPassword,
      categoria,
      adm: true,
      criadoEm: new Date(),
      atualizadoEm: new Date(),
    })

    await doctorRepository.save(admDoctor)

    return admDoctor
  }

  const normalDoctor = doctorRepository.create({
    nome,
    email,
    senha: hashedPassword,
    categoria,
    adm: false,
    criadoEm: new Date(),
    atualizadoEm: new Date(),
  })

  await doctorRepository.save(normalDoctor)

  return normalDoctor
}
