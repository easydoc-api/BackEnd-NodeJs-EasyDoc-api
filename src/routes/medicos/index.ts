import { Router } from "express"
import { schemaValidationMiddleware } from "../../middlewares/schemaValidation.middleware"
import { newDoctorSchema } from "../../schemas/newDoctor.schema"

const medic = Router()

export const medicRoutes = () => {
  medic.post("/register", schemaValidationMiddleware(newDoctorSchema)) //Registro de Médicos
  medic.get("/") //Listagem de todos os Médicos
  medic.get("/:id") // Responsável por listar um medico especifico por meio do ID
  medic.patch("/:id") // Responsável por alterar os dados de um médico especifico
  medic.delete("/id") // Responsável por apagar todos os dados de um médico
  return medic
}
