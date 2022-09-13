import { Router } from "express"
import { schemaValidationMiddleware } from "../../middlewares/schemaValidation.middleware"
import { newPatientSchema } from "../../schemas/newPatient.schema"
import {patientCreateController} from "../../controllers/pacientes/createPatient.controller"
import {patientDeleteController} from "../../controllers/pacientes/deletePatient.controller"
import {patientListOneController} from "../../controllers/pacientes/listPatient.controller"
import {patientListController} from "../../controllers/pacientes/patientList.controller"
import {patientUpdateController} from "../../controllers/pacientes/updatePatient.controller"


const patient = Router()

export const patientRoutes = () => {
  patient.post("/register", schemaValidationMiddleware(newPatientSchema), patientCreateController) // autenticação
  patient.get("", patientListController) //autenticação e adm/r4/professor Retorna todos os pacientes cadastrados
  patient.get("/:id", patientListOneController) //autenticação Retonra o paciente expecifico por ID
  patient.patch("/:id", patientUpdateController) //autenticação Atualiza o paciente expecifico por ID
  patient.delete("/:id", patientDeleteController) //autenticação e adm Soft Delete do paciente por ID

  return patient
}
