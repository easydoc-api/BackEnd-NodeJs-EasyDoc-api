import { Request, Response, NextFunction } from "express"
import { AppError } from "../errors/AppError"

export const authTokenMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {}
