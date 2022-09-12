import { DataSource } from "typeorm";
import AppDataSource from "../../../data-source";
import request from "supertest";
import app from "../../../app";
import {
  consult,
  loginMedicoProfessor,
  medicoNormal,
  medicoProfessor,
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
    const res = await request(app).post("/consultas/register").send(consult);

    expect(res.body).toHaveProperty("peso");
    expect(res.body).toHaveProperty("pressaoArterial");
    expect(res.body).toHaveProperty("uteroFita");
    expect(res.body).toHaveProperty("apresentação");
    expect(res.body).toHaveProperty("movimentacaoFetal");
    expect(res.body).toHaveProperty("batimentoCardiacoFetal");
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

  test("GET /consultas/pacientes/:id - É possível listar uma consulta pelo id do paciente", async () => {
    const professorLoginResponse = await request(app)
      .post("/login")
      .send(medicoProfessor);
    const paciente = await request(app)
      .get("/pacientes")
      .set("Authorization", `Bearer ${professorLoginResponse.body.token}`);

    const res = await request(app)
      .get(`/consultas/pacientes/${paciente.body[0].id}`)
      .send(paciente)
      .set("Authorization", `Bearer ${professorLoginResponse.body.token}`);

    expect(res.body[0]).toHaveProperty("peso");
    expect(res.body[0]).toHaveProperty("pressaoArterial");
    expect(res.body[0]).toHaveProperty("uteroFita");
    expect(res.body[0]).toHaveProperty("apresentação");
    expect(res.body[0]).toHaveProperty("movimentacaoFetal");
    expect(res.body[0]).toHaveProperty("batimentoCardiacoFetal");
    expect(res.body[0]).toHaveProperty("edema");
    expect(res.body[0]).toHaveProperty("toqueVaginal");
    expect(res.body[0]).toHaveProperty("conduta");
    expect(res.body[0]).toHaveProperty("retorno");
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
  });

  test("GET /consultas/pacientes/:id - Não é possível listar uma consulta pelo id do paciente sem autorização", async () => {
    const professorLoginResponse = await request(app)
      .post("/login")
      .send(medicoNormal);
    const paciente = await request(app)
      .get("/pacientes")
      .set("Authorization", `Bearer ${professorLoginResponse.body.token}`);

    const res = await request(app)
      .get(`/consultas/pacientes/${paciente.body[0].id}`)
      .send(paciente)
      .set("Authorization", `Bearer `);

    expect(res.body).toHaveProperty("message");
    expect(res.status).toBe(403);
  });

  test("GET /consultas/:id - Não é possível listar uma consulta pelo id de um paciente que não existe", async () => {
    const professorLoginResponse = await request(app)
      .post("/login")
      .send(medicoProfessor);
    const paciente = await request(app)
      .get("/pacientes")
      .set("Authorization", `Bearer ${professorLoginResponse.body.token}`);

    const res = await request(app)
      .get(`/consultas/pacientes/cd1d4f1a-1500-4740-9c41-2cbc0cd634f5`)
      .send(paciente)
      .set("Authorization", `Bearer ${professorLoginResponse.body.token}`);

    expect(res.body).toHaveProperty("message");
    expect(res.status).toBe(404);
  });
});
