//Exports externos
import "reflect-metadata"
import "express-async-errors"
import express from "express"

//Rotas
import { patientRoutes } from "./routes/pacientes"
import { medicRoutes } from "./routes/medicos"
import { appointmentRoutes } from "./routes/consultas"
import { appointmentZeroRoutes } from "./routes/consultasZero"
import { imageExamsRouter } from "./routes/examesImagem"
import { labExamsRouter } from "./routes/examesLaboratorial"
import { loginRoutes } from "./routes/login"
import { prontuarioRoutes } from "./routes/prontuarios"

//Middlewares
import { handleErrorMiddleware } from "./middlewares/handleError.middleware"

//Controllers


const app = express()
app.use(express.json())

app.use("/medicos", medicRoutes())
app.use("/login", loginRoutes())
app.use("/pacientes", patientRoutes())
app.use("/consulta_zero", appointmentZeroRoutes())
app.use("/consultas", appointmentRoutes())
app.use("/exame_imagem", imageExamsRouter())
app.use("/exame_laboratorial", labExamsRouter())
app.use("/prontuarios", prontuarioRoutes())

app.use(handleErrorMiddleware)

export default app
