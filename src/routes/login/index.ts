import { Router } from "express"
import { createLoginController } from "../../controllers/login/createLogin.controller"
import { schemaValidationMiddleware } from "../../middlewares/schemaValidation.middleware"
import { loginDoctorSchema } from "../../schemas/login.schema"

const login = Router()

export const loginRoutes = () => {
  login.post("", schemaValidationMiddleware(loginDoctorSchema), createLoginController)

  return login
}
