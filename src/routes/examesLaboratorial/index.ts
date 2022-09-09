import { Router } from "express";
import { examLabCreateController } from "../../controllers/examesLaboratoriais/examLabCreate.controller";

const labExams = Router();

export const labExamsRouter = () => {
  labExams.post("/register", examLabCreateController);
  labExams.get("");
  labExams.get("/paciente/:id");
  labExams.patch("/:id");
  labExams.delete("/:id");
  return labExams;
};
