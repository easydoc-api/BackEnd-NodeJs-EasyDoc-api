import { Request, Response, NextFunction } from "express"
import { AppError } from "../errors/AppError"
import jwt from "jsonwebtoken"

export const authTokenMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization

  if (!token) {
    throw new AppError("Token inválido!", 401)
  }

  token = token?.split(" ")[1]

  jwt.verify(
    token,
    process.env.SECRET_KEY as string,
    (error: any, decoded: any) => {
      if (error) {
        throw new AppError("Token inválido", 401)
      }

      req.user = {
        adm: decoded.adm,
        estaAtivo: decoded.estaAtivo,
        id: decoded.id,
      }
    }
  )
  next()
}

