import { Router } from "express"
import { schemaValidationMiddleware } from "../../middlewares/schemaValidation.middleware"
import { loginDoctorSchema } from "../../schemas/login.schema"

const login = Router()

export const loginRoutes = () => {
  login.post("", schemaValidationMiddleware(loginDoctorSchema))

  return login
}
