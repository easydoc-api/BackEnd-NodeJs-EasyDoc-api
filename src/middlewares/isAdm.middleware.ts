import { Request, Response, NextFunction } from "express"
import { AppError } from "../errors/AppError"

export const isAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  const {adm} = req.user
 

  if(req.method === "PATCH"){
    const {id} = req.user
  
    if(req.params.id === id){
      return next()
    }
  }

  if(!adm){
    throw new AppError("You're not admin!", 403)
  }

  next()
}
