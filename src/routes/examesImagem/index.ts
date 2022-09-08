import { Router } from "express"

const imageExams = Router()

export const imageExamsRouter = () => {
  imageExams.post("/register")
  imageExams.get("")
  imageExams.get("/:id")
  imageExams.patch("/:id")
  imageExams.delete("/:id")
  return imageExams
}
