import { Router } from "express"
import { appointmentCreateController } from "../../controllers/consultas/apointmentCreate.controller"
import { authTokenMiddleware } from "../../middlewares/authToken.middleware"

const appointment = Router()

export const appointmentRoutes = () => {
  appointment.post("/register",authTokenMiddleware,appointmentCreateController)
  appointment.get("/paciente/:id")
  appointment.get("")
  appointment.delete("/:id")
  return appointment
}
