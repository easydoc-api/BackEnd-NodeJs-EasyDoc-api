import { Router } from "express";
import { chartDeleteController } from "../../controllers/prontuarios/chartDelete.controller";
import { allChartsListController } from "../../controllers/prontuarios/chartList.controller";
import { chartListByIdController } from "../../controllers/prontuarios/chartListById.controller";

const prontuarios = Router();

export const prontuarioRoutes = () => {
  prontuarios.get("", allChartsListController); //autenticacao, adm/prof/R4
  prontuarios.get("/prontuarios/pacientes/:id", chartListByIdController); //autenticação
  prontuarios.get("prontuarios/consultas/:palavra_chave"); //autenticação
  prontuarios.get("prontuarios/consultas/:idade_gestacional"); //autenticação
  prontuarios.patch("/prontuarios/:id"); //autenticação
  prontuarios.delete("/prontuarios/:id", chartDeleteController); //autenticação

  return prontuarios;
};
