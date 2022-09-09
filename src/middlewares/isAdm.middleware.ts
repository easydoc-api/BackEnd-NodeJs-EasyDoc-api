import { Request, Response, NextFunction } from "express"
import { AppError } from "../errors/AppError"

export const isAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  const {adm} = req.user

  if(!adm){
    throw new AppError("You're not admin!", 403)
  }

  next()
}
