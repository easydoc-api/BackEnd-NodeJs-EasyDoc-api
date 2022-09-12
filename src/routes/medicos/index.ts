import { Router } from "express"

import { doctorCreateController } from "../../controllers/medicos/doctorCreate.controller"
import { doctorDeleteController } from "../../controllers/medicos/doctorDelete.controller"
import { doctorListController } from "../../controllers/medicos/doctorList.controller"
import { doctorListOneByIdController } from "../../controllers/medicos/doctorListById.controller"
import { doctorUpdateController } from "../../controllers/medicos/doctorUpdate.controller"
import { authTokenMiddleware } from "../../middlewares/authToken.middleware"
import { isAdmMiddleware } from "../../middlewares/isAdm.middleware"

import { schemaValidationMiddleware } from "../../middlewares/schemaValidation.middleware"
import { newDoctorSchema } from "../../schemas/newDoctor.schema"

const medic = Router()

export const medicRoutes = () => {
  medic.post("/register", schemaValidationMiddleware(newDoctorSchema), doctorCreateController) 
  medic.get("", authTokenMiddleware, isAdmMiddleware, doctorListController) 
  medic.get("/:id", authTokenMiddleware, isAdmMiddleware, doctorListOneByIdController) 
  medic.patch("/:id", authTokenMiddleware, isAdmMiddleware, doctorUpdateController) 
  medic.delete("/:id", authTokenMiddleware, isAdmMiddleware, doctorDeleteController) 
  
  return medic
}
