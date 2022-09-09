import { Router } from "express";
import { examLabCreateController } from "../../controllers/examesLaboratoriais/examLabCreate.controller";
import { examsLabListController } from "../../controllers/examesLaboratoriais/examsLabList.controller";

const labExams = Router();

export const labExamsRouter = () => {
  labExams.post("/register", examLabCreateController);
  labExams.get("", examsLabListController);
  labExams.get("/paciente/:id");
  labExams.patch("/:id");
  labExams.delete("/:id");
  return labExams;
};
