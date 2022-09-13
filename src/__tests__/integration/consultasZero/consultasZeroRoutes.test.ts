import { DataSource } from "typeorm"
import AppDataSource from "../../../data-source"
import request from "supertest"
import app from "../../../app"
import {
  criarNovaConsultaZero,
  loginMedicoNaoDono,
  loginMedicoNormal,
  loginMedicoProfessor,
  medicoAtualizado,
  medicoAtualizadoCategoriaNormal,
  medicoNormal,
  medicoNormalNaoDono,
  medicoProfessor,
} from "../../mocks"

describe("/consulta_zero", () => {
  let connection: DataSource

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res
      })
      .catch((err) => {
        console.error("Error during Data Source initialization", err)
      })
  })

  afterAll(async () => {
    await connection.destroy()
  })

  test("POST /consulta_zero/register - Possível cadastrar uma nova consulta", async () => {
    await request(app)
      .post("/consulta_zero/register")
      .send(criarNovaConsultaZero)
    const res = await request(app)
      .post("/medicos/register")
      .send(criarNovaConsultaZero)

    expect(res.body).toHaveProperty("paridade")
    expect(res.body).toHaveProperty("consanguinidade")
    expect(res.body).toHaveProperty("idadeGestacional")
    expect(res.body).toHaveProperty("semanaGestacional")
    expect(res.body).toHaveProperty("diaGestacional")
    expect(res.body).toHaveProperty("historiaPregressa")
    expect(res.body).toHaveProperty("historiaGinecologicaObstetrica")
  })
})
