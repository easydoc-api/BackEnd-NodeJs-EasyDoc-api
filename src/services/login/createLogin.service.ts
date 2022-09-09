import AppDataSource from "../../data-source"
import { Medico } from "../../entities/medico.entity"
import { IMedicoLogin } from "../../interfaces/medicos"
import { AppError } from "../../errors/AppError"
import { compare } from "bcryptjs"
import jwt from "jsonwebtoken"

export const createLoginService = async ({
  email,
  senha,
}: IMedicoLogin): Promise<string> => {
  const doctorRepository = AppDataSource.getMongoRepository(Medico)
  const doctor = await doctorRepository.findOneBy({ email })

  if (doctor?.estaAtivo == false) {
    throw new AppError("User is not active!")
  }

  if (!doctor) {
    throw new AppError("Email or password invalid!", 401)
  }

  if (!doctor.estaAtivo) {
    throw new AppError("Invalid user", 401)
  }

  const checkPassword = await compare(senha, doctor.senha)

  if (!checkPassword) {
    throw new AppError("Invalid credentials", 403)
  }

  const token = jwt.sign(
    {
      adm: doctor.adm,
      estaAtivo: doctor.estaAtivo,
    },
    process.env.SECRET_KEY as string,
    {
      subject: doctor.id,
      expiresIn: "2h",
    }
  )

  return token
}
