import { Router } from "express"
import { createImageExamsController } from "../../controllers/examesImagem/createImageExams.controller"
import { deleteImageExamsController } from "../../controllers/examesImagem/deleteImageExams.controller"
import { listImageExamsController } from "../../controllers/examesImagem/listImageExams.controller"
import { listImageExamsByIdController } from "../../controllers/examesImagem/listImageExamsByID.controller"
import { updateImageExamsController } from "../../controllers/examesImagem/updateImageExams.controller"
import { authTokenMiddleware } from "../../middlewares/authToken.middleware"
import { isAdmMiddleware } from "../../middlewares/isAdm.middleware"

const imageExams = Router()

export const imageExamsRouter = () => {
  imageExams.post("/register", authTokenMiddleware, createImageExamsController)
  imageExams.get("", authTokenMiddleware, listImageExamsController)
  imageExams.get("/:id", authTokenMiddleware, listImageExamsByIdController)
  imageExams.patch("/:id", authTokenMiddleware, updateImageExamsController)
  imageExams.delete("/:id", authTokenMiddleware, isAdmMiddleware, deleteImageExamsController )
  return imageExams
}
