import { Router } from "express"

const appointmentZero = Router()

export const appointmentZeroRoutes = () => {
  appointmentZero.post("/register")
  appointmentZero.get("/paciente/:id")
  appointmentZero.delete("/:id")
  appointmentZero.patch("/:id")
  appointmentZero.get("")
  return appointmentZero
}
