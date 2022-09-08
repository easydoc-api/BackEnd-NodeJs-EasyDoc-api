import { Router } from "express"

const appointment = Router()

export const appointmentRoutes = () => {
  appointment.post("/register")
  appointment.get("/paciente/:id")
  appointment.get("")
  appointment.delete("/:id")
  return appointment
}
