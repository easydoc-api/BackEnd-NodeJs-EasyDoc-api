import { DataSource } from "typeorm";
import AppDataSource from "../../../data-source";
import request from "supertest";
import app from "../../../app";
import {
  consult,
  loginMedicoProfessor,
  medicoNormal,
  medicoProfessor,
  patiente,
} from "../../mocks";

describe("/consultas", () => {
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

  test("POST /consultas/register - Possível cadastrar uma consulta", async () => {
    await request(app).post('/medicos/register').send(medicoProfessor)

    const professorLoginResponse = await request(app)
      .post("/login")
      .send(loginMedicoProfessor);
    const res = await request(app)
      .post("/consultas/register")
      .send(consult)
      .set("Authorization", `Bearer ${professorLoginResponse.body.token}`);

    expect(res.body).toHaveProperty("peso");
    expect(res.body).toHaveProperty("pressaoArterial");
    expect(res.body).toHaveProperty("uteroFita");
    expect(res.body).toHaveProperty("apresentacao");
    expect(res.body).toHaveProperty("movimentacaoFetal");
    expect(res.body).toHaveProperty("batimentoCardFetal");
    expect(res.body).toHaveProperty("edema");
    expect(res.body).toHaveProperty("toqueVaginal");
    expect(res.body).toHaveProperty("conduta");
    expect(res.body).toHaveProperty("retorno");
    expect(res.status).toBe(201);
  });

  test("GET /consultas - Possível listar todos as consultas", async () => {
    const professorLoginResponse = await request(app)
      .post("/login")
      .send(loginMedicoProfessor);
    const response = await request(app)
      .get("/consultas")
      .set("Authorization", `Bearer ${professorLoginResponse.body.token}`);

    expect(response.body).toHaveLength(1);
    expect(response.status).toBe(200);
  });

  test("GET /consultas - Não é possível listar todas consultas sem autorização", async () => {
    const response = await request(app)
      .get("/consultas")
      .set("Authorization", `Bearer a`);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("GET /consultas/:id - É possível listar uma consulta por id", async () => {
    const professorLoginResponse = await request(app)
      .post("/login")
      .send(medicoProfessor);

      await request(app).post('/pacientes/register').send(patiente)
      .set('Authorization', `Bearer ${professorLoginResponse.body.token}`)

    const appointments = await request(app)
      .get("/consultas")
      .set("Authorization", `Bearer ${professorLoginResponse.body.token}`);

    const res = await request(app)
      .get(`/consultas/${appointments.body[0].id}`)
      .set("Authorization", `Bearer ${professorLoginResponse.body.token}`);

    expect(res.body).toHaveProperty("peso");
    expect(res.body).toHaveProperty("pressaoArterial");
    expect(res.body).toHaveProperty("uteroFita");
    expect(res.body).toHaveProperty("apresentacao");
    expect(res.body).toHaveProperty("movimentacaoFetal");
    expect(res.body).toHaveProperty("batimentoCardFetal");
    expect(res.body).toHaveProperty("edema");
    expect(res.body).toHaveProperty("toqueVaginal");
    expect(res.body).toHaveProperty("conduta");
    expect(res.body).toHaveProperty("retorno");
    expect(res.status).toBe(200);
  });

  test("GET /consultas/paciente/:id - Não é possível listar uma consulta pelo id sem autorização", async () => {
    const professorLoginResponse = await request(app)
      .post("/login")
      .send(medicoNormal);
    const createPatiente = await request(app).post('/pacientes/register')
      .send(patiente).set('Authorization', `Bearer ${professorLoginResponse.body.token}`)

    const res = await request(app)
      .get(`/consultas/${createPatiente.body.id}`)
      .set("Authorization", `Bearer `);

    expect(res.body).toHaveProperty("message");
    expect(res.status).toBe(401);
  });

  test("GET /consultas/paciente/:id - Não é possível listar uma consulta pelo id que não existe", async () => {
    const professorLoginResponse = await request(app)
      .post("/login")
      .send(loginMedicoProfessor);
    const res = await request(app)
      .get(`/consultas/3dbb3947-8e2d-40b0-89ee-ace6c4ec1041`)
      .set("Authorization", `Bearer ${professorLoginResponse.body.token}`);

    expect(res.body).toHaveProperty("message");
    expect(res.status).toBe(404);
  });
});
