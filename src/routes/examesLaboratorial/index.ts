import { Router } from "express";
import { examLabCreateController } from "../../controllers/examesLaboratoriais/examLabCreate.controller";
import { examLabListOneByIdController } from "../../controllers/examesLaboratoriais/examLabListById.controller";
import { examsLabListController } from "../../controllers/examesLaboratoriais/examsLabList.controller";

const labExams = Router();

export const labExamsRouter = () => {
  labExams.post("/register", examLabCreateController);
  labExams.get("", examsLabListController);
  labExams.get("/paciente/:id", examLabListOneByIdController);
  labExams.patch("/:id");
  labExams.delete("/:id");
  return labExams;
};
