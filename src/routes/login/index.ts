import { Router } from "express"
import { authTokenMiddleware } from "../../middlewares/authToken.middleware"
import { schemaValidationMiddleware } from "../../middlewares/schemaValidation.middleware"
import { loginDoctorSchema } from "../../schemas/login.schema"

const login = Router()

export const loginRoutes = () => {
  login.post(
    "",
    authTokenMiddleware,
    schemaValidationMiddleware(loginDoctorSchema)
  )

  return login
}
