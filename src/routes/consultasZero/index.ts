import { Router } from "express"
import appointmentZeroCreateController from "../../controllers/consultasZero/consultaZeroCreate.controller"

const appointmentZero = Router()

export const appointmentZeroRoutes = () => {
  appointmentZero.post("/register", appointmentZeroCreateController)
  appointmentZero.get("/paciente/:id")
  appointmentZero.delete("/:id")
  appointmentZero.patch("/:id")
  appointmentZero.get("")
  return appointmentZero
}
