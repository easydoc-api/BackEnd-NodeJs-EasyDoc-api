import { Router } from "express"

import { doctorCreateController } from "../../controllers/medicos/doctorCreate.controller"
import { doctorDeleteController } from "../../controllers/medicos/doctorDelete.controller"
import { doctorListController } from "../../controllers/medicos/doctorList.controller"
import { doctorListOneByIdController } from "../../controllers/medicos/doctorListById.controller"

import { schemaValidationMiddleware } from "../../middlewares/schemaValidation.middleware"
import { newDoctorSchema } from "../../schemas/newDoctor.schema"

const medic = Router()

export const medicRoutes = () => {
  medic.post("/register", schemaValidationMiddleware(newDoctorSchema), doctorCreateController) //Registro de Médicos
  medic.get("", doctorListController) //Listagem de todos os Médicos
  medic.get("/:id", doctorListOneByIdController) // Responsável por listar um medico especifico por meio do ID
  medic.patch("/:id") // Responsável por alterar os dados de um médico especifico
  medic.delete("/:id", doctorDeleteController) // Responsável por apagar todos os dados de um médico
  return medic
}
