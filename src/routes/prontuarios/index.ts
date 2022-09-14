import { Router } from "express"
import { chartDeleteController } from "../../controllers/prontuarios/chartDelete.controller"
import { chartInsertApointmentController } from "../../controllers/prontuarios/chartInsertApointment.controller"
import { chartInsertDoctorController } from "../../controllers/prontuarios/chartInsertDoctor.controller"
import { chartInsertImageExamsController } from "../../controllers/prontuarios/chartInsertImageExams.controller"
import { chartInsertAppointmentZeroController } from "../../controllers/prontuarios/chartInserAppointmentZero.controller";
import { chartInsertExameLabController } from "../../controllers/prontuarios/chartInsertExameLab.controller"
import { allChartsListController } from "../../controllers/prontuarios/chartList.controller"
import { chartListByIdController } from "../../controllers/prontuarios/chartListById.controller"
import { chartUpdateController } from "../../controllers/prontuarios/chartUpdate.controller"
import { authTokenMiddleware } from "../../middlewares/authToken.middleware"
import { isAdmMiddleware } from "../../middlewares/isAdm.middleware"

const prontuarios = Router()

export const prontuarioRoutes = () => {
  prontuarios.post("/medicos/:id", authTokenMiddleware, chartInsertDoctorController)
  prontuarios.post("/exames_laboratoriais/:id",authTokenMiddleware, chartInsertExameLabController)
  prontuarios.post("/consultaZero/:id",authTokenMiddleware, chartInsertAppointmentZeroController);
  prontuarios.post("/exame_imagem/:id",authTokenMiddleware, chartInsertImageExamsController)
  prontuarios.get("", authTokenMiddleware, isAdmMiddleware ,allChartsListController) 
  prontuarios.get("/pacientes/:id",authTokenMiddleware, chartListByIdController) 
  prontuarios.get("/consultas/:palavra_chave",authTokenMiddleware,) 
  prontuarios.get("/consultas/:idade_gestacional",authTokenMiddleware,) 
  prontuarios.patch("/:id",authTokenMiddleware, chartUpdateController) 
  prontuarios.delete("/:id",authTokenMiddleware, isAdmMiddleware, chartDeleteController) 
  prontuarios.post("/consultas/:id",authTokenMiddleware, chartInsertApointmentController)
  return prontuarios
}
