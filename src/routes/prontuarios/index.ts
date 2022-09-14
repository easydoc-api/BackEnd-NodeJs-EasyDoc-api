import { Router } from "express";
import { chartDeleteController } from "../../controllers/prontuarios/chartDelete.controller";
import { chartInsertApointmentController } from "../../controllers/prontuarios/chartInsertApointment.controller";
import { chartInsertDoctorController} from "../../controllers/prontuarios/chartInsertDoctor.controller";
import { chartInsertImageExamsController } from "../../controllers/prontuarios/chartInsertImageExams.controller"
import { chartInsertExameLabController } from "../../controllers/prontuarios/chartInsertExameLab.controller";
import { allChartsListController } from "../../controllers/prontuarios/chartList.controller";
import { chartListByIdController } from "../../controllers/prontuarios/chartListById.controller";
import { chartUpdateController } from "../../controllers/prontuarios/chartUpdate.controller";
import { authTokenMiddleware } from "../../middlewares/authToken.middleware";
//importar middleware
const prontuarios = Router()

export const prontuarioRoutes = () => {
  prontuarios.post("/medicos/:id", chartInsertDoctorController)
  prontuarios.post("/exames_laboratoriais/:id", chartInsertExameLabController)
  prontuarios.post("/exame_imagem/:id", chartInsertImageExamsController)
  prontuarios.get("", allChartsListController); //autenticacao, adm/prof/R4
  prontuarios.get("/pacientes/:id", chartListByIdController); //autenticação
  prontuarios.get("/consultas/:palavra_chave"); //autenticação
  prontuarios.get("/consultas/:idade_gestacional"); //autenticação
  prontuarios.patch("/:id", chartUpdateController); //autenticação
  prontuarios.delete("/:id", chartDeleteController); //autenticação
  prontuarios.post("/consultas/:id", chartInsertApointmentController);
  return prontuarios;
};
