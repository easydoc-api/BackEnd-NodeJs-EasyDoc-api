import app from "./app"
import AppDataSource from "./data-source"

;(async () => {
  await AppDataSource.initialize().catch((err) => {
    console.error("Erro durante inicialização do Data Source", err)
  })

  app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor executando")
  })
})()
