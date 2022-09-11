import { Router } from "express";

import { examLabCreateController } from "../../controllers/examesLaboratoriais/examLabCreate.controller";
import { examLabDeleteController } from "../../controllers/examesLaboratoriais/examLabDelete.controller";
import { examLabListOneByIdController } from "../../controllers/examesLaboratoriais/examLabListById.controller";
import { examLabUpdateController } from "../../controllers/examesLaboratoriais/examLabUpdate.controller";
import { examsLabListController } from "../../controllers/examesLaboratoriais/examsLabList.controller";

const labExams = Router();

export const labExamsRouter = () => {
  labExams.post("/register", examLabCreateController);
  labExams.get("", examsLabListController);
  labExams.get("/paciente/:id", examLabListOneByIdController);
  labExams.patch("/:id", examLabUpdateController);
  labExams.delete("/:id", examLabDeleteController);
  return labExams;
};
