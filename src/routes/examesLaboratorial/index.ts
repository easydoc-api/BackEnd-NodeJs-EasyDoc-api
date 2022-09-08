import { Router } from "express"

const labExams = Router()

export const labExamsRouter = () => {
  labExams.post("/register")
  labExams.get("")
  labExams.get("/paciente/:id")
  labExams.patch("/:id")
  labExams.delete("/:id")
  return labExams
}
