import { DataSource } from "typeorm"
import AppDataSource from "../../../data-source"
import request from "supertest"
import app from "../../../app"
import {
  atualizarNovaConsultaZero,
  criarNovaConsultaZero,
  loginMedicoNaoDono,
  loginMedicoNormal,
  loginMedicoProfessor,
  loginMedicoProfessorSemAtualizar,
  medicoAtualizado,
  medicoAtualizadoCategoriaNormal,
  medicoNormal,
  medicoNormalNaoDono,
  medicoProfessor,
  medicoProfessorSemAtualizar,
} from "../../mocks"

describe("/consultas_zero", () => {
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
      .post("/medicos/register")
      .send(medicoProfessorSemAtualizar)

    const loginMedicoProfessor = await request(app).post('/login')
    .send(loginMedicoProfessorSemAtualizar)

    const res = await request(app)
    .post("/consulta_zero/register")
    .send(criarNovaConsultaZero).set('Authorization', `Bearer ${loginMedicoProfessor.body.token}`)

    expect(res.body).toHaveProperty("paridade")
    expect(res.body).toHaveProperty("consanguinidade")
    expect(res.body).toHaveProperty("idadeGestacional")
    expect(res.body).toHaveProperty("dataMenstruacao")
    expect(res.body).toHaveProperty("primeiroUltrassom")
    expect(res.body).toHaveProperty("semanaGestacional")
    expect(res.body).toHaveProperty("diaGestacional")
    expect(res.body).toHaveProperty("historiaPregressa")
    expect(res.body).toHaveProperty("historiaGinecologicaObstetrica")
    expect(res.body).toHaveProperty("id")
    expect(res.body).toHaveProperty("atualizadoEm")
    expect(res.body).toHaveProperty("data")
    expect(res.body).toHaveProperty("estaAtivo")
    expect(res.body.estaAtivo).toBe(true)
  })

  test("POST /consulta_zero/register - Não é possível cadastrar uma nova consulta sem autorizaçao", async () => {
    const res = await request(app)
    .post("/consulta_zero/register")
    .send(criarNovaConsultaZero)

    expect(res.body).toHaveProperty("message")
    expect(res.status).toBe(401)
  })

  test("GET /consulta_zero - É possível listar as consultas", async () => {

    const loginMedicoProfessor = await request(app).post('/login')
    .send(loginMedicoProfessorSemAtualizar)

    const res = await request(app)
    .get("/consulta_zero")
    .set('Authorization', `Bearer ${loginMedicoProfessor.body.token}`)

    expect(res.status).toBe(200)
    expect(res.body).toHaveLength(1)
  })
  
  test("GET /consulta_zero - Não é possível listar as consultas sem autenticação", async () => {

    const res = await request(app)
    .get("/consulta_zero")
    
    expect(res.body).toHaveProperty('message')
    expect(res.status).toBe(401)
  })

  test("GET /consulta_zero/id - É possível listar uma consultas por id", async () => {

    const loginMedicoProfessor = await request(app).post('/login')
    .send(loginMedicoProfessorSemAtualizar)

    const appointments = await request(app)
    .get("/consulta_zero")
    .set('Authorization', `Bearer ${loginMedicoProfessor.body.token}`)

    const res = await request(app)
    .get(`/consulta_zero/${appointments.body[0].id}`)
    .set('Authorization', `Bearer ${loginMedicoProfessor.body.token}`)
    
    expect(res.body).toHaveProperty("paridade")
    expect(res.body).toHaveProperty("consanguinidade")
    expect(res.body).toHaveProperty("idadeGestacional")
    expect(res.body).toHaveProperty("dataMenstruacao")
    expect(res.body).toHaveProperty("primeiroUltrassom")
    expect(res.body).toHaveProperty("semanaGestacional")
    expect(res.body).toHaveProperty("diaGestacional")
    expect(res.body).toHaveProperty("historiaPregressa")
    expect(res.body).toHaveProperty("historiaGinecologicaObstetrica")
    expect(res.body).toHaveProperty("id")
    expect(res.body).toHaveProperty("atualizadoEm")
    expect(res.body).toHaveProperty("data")
    expect(res.body).toHaveProperty("estaAtivo")
    expect(res.status).toBe(200)
  })

  test("GET /consulta_zero/id - Não é possível listar uma consultas por id sem autenticação", async () => {

    const loginMedicoProfessor = await request(app).post('/login')
    .send(loginMedicoProfessorSemAtualizar)

    const appointments = await request(app)
    .get("/consulta_zero")
    .set('Authorization', `Bearer ${loginMedicoProfessor.body.token}`)

    const res = await request(app)
    .get(`/consulta_zero/${appointments.body[0].id}`)
    
    
    expect(res.body).toHaveProperty("message")
    expect(res.status).toBe(401)
  })

  test("PATCH /consulta_zero/id - É possível atualizar uma consultas por id", async () => {

    const loginMedicoProfessor = await request(app).post('/login')
    .send(loginMedicoProfessorSemAtualizar)

    const appointments = await request(app)
    .get("/consulta_zero")
    .set('Authorization', `Bearer ${loginMedicoProfessor.body.token}`)

    const res = await request(app)
    .patch(`/consulta_zero/${appointments.body[0].id}`)
    .send(atualizarNovaConsultaZero)
    .set('Authorization', `Bearer ${loginMedicoProfessor.body.token}`)
    
    expect(res.body).toHaveProperty("id")
    expect(res.body).toHaveProperty("atualizadoEm")
    expect(res.body).toHaveProperty("data")
    expect(res.body).toHaveProperty("estaAtivo")
    expect(res.body).toHaveProperty("paridade")
    expect(res.body).toHaveProperty("consanguinidade")
    expect(res.body).toHaveProperty("idadeGestacional")
    expect(res.body).toHaveProperty("dataMenstruacao")
    expect(res.body).toHaveProperty("primeiroUltrassom")
    expect(res.body).toHaveProperty("semanaGestacional")
    expect(res.body).toHaveProperty("diaGestacional")
    expect(res.body).toHaveProperty("historiaPregressa")
    expect(res.body).toHaveProperty("historiaGinecologicaObstetrica")
    expect(res.body.paridade).toEqual("Teve muitas")
    expect(res.body.idadeGestacional).toEqual(15)
    expect(res.status).toBe(200)
  })

  test("PATCH /consulta_zero/id - Não é possível atualizar uma consultas por id sem autenticação", async () => {

    const loginMedicoProfessor = await request(app).post('/login')
    .send(loginMedicoProfessorSemAtualizar)

    const appointments = await request(app)
    .get("/consulta_zero")
    .set('Authorization', `Bearer ${loginMedicoProfessor.body.token}`)

    const res = await request(app)
    .patch(`/consulta_zero/${appointments.body[0].id}`)
    .send(atualizarNovaConsultaZero)
    
    
    expect(res.body).toHaveProperty("message")
    expect(res.status).toBe(401)
  })

  test("DELETE /consulta_zero/id - É possível desativar uma consultas por id", async () => {

    const loginMedicoProfessor = await request(app).post('/login')
    .send(loginMedicoProfessorSemAtualizar)

    const appointments = await request(app)
    .get("/consulta_zero")
    .set('Authorization', `Bearer ${loginMedicoProfessor.body.token}`)

    await request(app)
    .delete(`/consulta_zero/${appointments.body[0].id}`)
    .set('Authorization', `Bearer ${loginMedicoProfessor.body.token}`)

    const res = await request(app)
    .get(`/consulta_zero/${appointments.body[0].id}`)
    .set('Authorization', `Bearer ${loginMedicoProfessor.body.token}`)
    
    expect(res.body.estaAtivo).toEqual(false)
    expect(res.status).toBe(200)
  })

  test("DELETE /consulta_zero/id - Não é possível desativar uma consultas por id sem autenticação", async () => {

    const loginMedicoProfessor = await request(app).post('/login')
    .send(loginMedicoProfessorSemAtualizar)

    const appointments = await request(app)
    .get("/consulta_zero")
    .set('Authorization', `Bearer ${loginMedicoProfessor.body.token}`)

    const res = await request(app)
    .delete(`/consulta_zero/${appointments.body[0].id}`)
    
    
    expect(res.body).toHaveProperty("message")
    expect(res.status).toBe(401)
  })

  test("DELETE /consulta_zero/id - Não é possível desativar uma consultas por id inválido", async () => {

    const loginMedicoProfessor = await request(app).post('/login')
    .send(loginMedicoProfessorSemAtualizar)

    const appointments = await request(app)
    .get("/consulta_zero")
    .set('Authorization', `Bearer ${loginMedicoProfessor.body.token}`)

    const appointmentsDesativated = await request(app)
    .delete(`/consulta_zero/${appointments.body[0].id}`)
    .set('Authorization', `Bearer ${loginMedicoProfessor.body.token}`)

    const res = await request(app)
    .get(`/consulta_zero/13970660-5dbe-423a-9a9d-5c23b37943cf`)
    .set('Authorization', `Bearer ${loginMedicoProfessor.body.token}`)
    
    expect(res.body).toHaveProperty("message")
    expect(res.status).toBe(404)
  })
})
