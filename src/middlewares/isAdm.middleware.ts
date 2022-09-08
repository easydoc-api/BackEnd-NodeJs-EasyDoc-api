import { Request, Response, NextFunction } from "express"
import { AppError } from "../errors/AppError"

export const isAdm = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {}