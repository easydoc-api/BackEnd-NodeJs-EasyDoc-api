import { Router } from "express"
import appointmentZeroCreateController from "../../controllers/consultasZero/consultaZeroCreate.controller"
import { authTokenMiddleware } from "../../middlewares/authToken.middleware"

const appointmentZero = Router()

export const appointmentZeroRoutes = () => {
  appointmentZero.post("/register", authTokenMiddleware, appointmentZeroCreateController)
  appointmentZero.get("/paciente/:id")
  appointmentZero.delete("/:id")
  appointmentZero.patch("/:id")
  appointmentZero.get("")
  return appointmentZero
}
