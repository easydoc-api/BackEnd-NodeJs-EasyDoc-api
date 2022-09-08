import { Router } from "express"
import { schemaValidationMiddleware } from "../../middlewares/schemaValidation.middleware"
import { newPatientSchema } from "../../schemas/newPatient.schema"

const patient = Router()

export const patientRoutes = () => {
  patient.post("/register", schemaValidationMiddleware(newPatientSchema)) // autenticação
  patient.get("") //autenticação e adm/r4/professor
  patient.get("/:id") //autenticação
  patient.patch("/:id") //autenticação
  patient.get("/:id") //autenticação e adm

  return patient
}
