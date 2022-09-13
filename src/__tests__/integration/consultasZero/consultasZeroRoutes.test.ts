import { DataSource } from "typeorm";
import AppDataSource from "../../../data-source";
import request from "supertest";
import app from "../../../app";
import {
  criarNovaConsultaZero,
  listarNovaConsultaZero,
  loginMedicoNaoDono,
  loginMedicoNormal,
  loginMedicoProfessor,
  medicoAtualizado,
  medicoAtualizadoCategoriaNormal,
  medicoNormal,
  medicoNormalNaoDono,
  medicoProfessor,
  patiente,
} from "../../mocks";

describe("/consulta_zero", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
      })
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("POST /consulta_zero/register - Possível cadastrar uma nova consulta se autenticado", async () => {
    await request(app).post("/medicos/register").send(medicoProfessor);

    const professorLoginResponse = await request(app)
      .post("/login")
      .send(loginMedicoProfessor);

    const res = await request(app)
      .post("/consulta_zero/register")
      .send(criarNovaConsultaZero)
      .set("Authorization", `Bearer ${professorLoginResponse.body.token}`);

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("paridade");
    expect(res.body).toHaveProperty("consanguinidade");
    expect(res.body).toHaveProperty("idadeGestacional");
    expect(res.body).toHaveProperty("semanaGestacional");
    expect(res.body).toHaveProperty("diaGestacional");
    expect(res.body).toHaveProperty("historiaPregressa");
    expect(res.body).toHaveProperty("historiaGinecologicaObstetrica");
  });

  test("POST /consulta_zero/register - Não possível cadastrar uma nova consulta sem autenticação", async () => {
    const res = await request(app)
      .post("/consulta_zero/register")
      .send(criarNovaConsultaZero);

    expect(res.body).toHaveProperty("message");
    expect(res.status).toBe(401);
  });

  test("GET /consulta_zero/:id - Possível listar uma consulta de um paciente com autorização", async () => {
    const login = await request(app).post("/login").send(loginMedicoProfessor);

    const consulta = await request(app)
      .post("/consulta_zero/register")
      .send(listarNovaConsultaZero)
      .set("Authorization", `Bearer ${login.body.token}`);
    console.log(consulta.body);

    const res = await request(app)
      .get(`/consulta_zero/${consulta.body.id}`)
      .set("Authorization", `Bearer ${login.body.token}`);

    expect(res.body).toHaveProperty("paridade");
    expect(res.body).toHaveProperty("consanguinidade");
    expect(res.body).toHaveProperty("idadeGestacional");
    expect(res.body).toHaveProperty("semanaGestacional");
    expect(res.body).toHaveProperty("diaGestacional");
    expect(res.body).toHaveProperty("historiaPregressa");
    expect(res.body).toHaveProperty("historiaGinecologicaObstetrica");
  });
});
