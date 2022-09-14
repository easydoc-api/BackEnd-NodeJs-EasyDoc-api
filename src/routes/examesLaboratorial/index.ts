import { Router } from "express";

import { examLabCreateController } from "../../controllers/examesLaboratoriais/examLabCreate.controller";
import { examLabDeleteController } from "../../controllers/examesLaboratoriais/examLabDelete.controller";
import { examLabListOneByIdController } from "../../controllers/examesLaboratoriais/examLabListById.controller";
import { examLabUpdateController } from "../../controllers/examesLaboratoriais/examLabUpdate.controller";
import { examsLabListController } from "../../controllers/examesLaboratoriais/examsLabList.controller";

import { authTokenMiddleware } from "../../middlewares/authToken.middleware";
import { isAdmMiddleware } from "../../middlewares/isAdm.middleware";

const labExams = Router();

export const labExamsRouter = () => {
  labExams.post("/register", authTokenMiddleware, examLabCreateController);
  labExams.get("", authTokenMiddleware, examsLabListController);
  labExams.get(
    "/paciente/:id",
    authTokenMiddleware,
    examLabListOneByIdController
  );
  labExams.patch("/:id", authTokenMiddleware, examLabUpdateController);
  labExams.delete(
    "/:id",
    authTokenMiddleware,
    isAdmMiddleware,
    examLabDeleteController
  );
  return labExams;
};
