import { Router } from "express"
import { schemaValidationMiddleware } from "../../middlewares/schemaValidation.middleware"
import { newPatientSchema } from "../../schemas/newPatient.schema"

const patient = Router()

export const patientRoutes = () => {
  patient.post("/register", schemaValidationMiddleware(newPatientSchema)) // autenticação
  patient.get("") //autenticação e adm/r4/professor Retorna todos os pacientes cadastrados
  patient.get("/:id") //autenticação Retonra o paciente expecifico por ID
  patient.patch("/:id") //autenticação Atualiza o paciente expecifico por ID
  patient.delete("/:id") //autenticação e adm Soft Delete do paciente por ID

  return patient
}
