import { Router } from "express";
import { chartDeleteController } from "../../controllers/prontuarios/chartDelete.controller";
import { allChartsListController } from "../../controllers/prontuarios/chartList.controller";
import { chartListByIdController } from "../../controllers/prontuarios/chartListById.controller";
import { chartUpdateController } from "../../controllers/prontuarios/chartUpdate.controller";
//importar middleware
const prontuarios = Router();

export const prontuarioRoutes = () => {
  prontuarios.get("", allChartsListController); //autenticacao, adm/prof/R4
  prontuarios.get("/pacientes/:id", chartListByIdController); //autenticação
  prontuarios.get("/consultas/:palavra_chave"); //autenticação
  prontuarios.get("/consultas/:idade_gestacional"); //autenticação
  prontuarios.patch("/:id", chartUpdateController); //autenticação
  prontuarios.delete("/:id", chartDeleteController); //autenticação

  return prontuarios;
};
