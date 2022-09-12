import { Router } from "express"
import { appointmentZeroCreateController } from "../../controllers/consultasZero/consultaZeroCreate.controller"
import { appointmentZeroListController } from "../../controllers/consultasZero/consultaZeroList.controller"
import { authTokenMiddleware } from "../../middlewares/authToken.middleware"

const appointmentZero = Router()

export const appointmentZeroRoutes = () => {
  appointmentZero.post("/register", authTokenMiddleware, appointmentZeroCreateController)
  appointmentZero.get("/paciente/:id")
  appointmentZero.get("", authTokenMiddleware, appointmentZeroListController)
  appointmentZero.patch("/:id")
  return appointmentZero
}
