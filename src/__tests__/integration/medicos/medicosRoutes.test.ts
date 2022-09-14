import { DataSource } from "typeorm";
import AppDataSource from "../../../data-source";
import request from "supertest";
import app from "../../../app";
import {
  loginMedicoNaoDono,
  loginMedicoNormal,
  loginMedicoProfessor,
  medicoAtualizado,
  medicoAtualizadoCategoriaNormal,
  medicoNormal,
  medicoProfessor,
} from "../../mocks";

describe("ROUTES - /medicos", () => {
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

  test("POST /medicos - Possível cadastrar um médico", async () => {
    const res = await request(app).post("/medicos/register").send(medicoNormal);

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("nome");
    expect(res.body).toHaveProperty("email");
    expect(res.body).toHaveProperty("categoria");
    expect(res.body).toHaveProperty("criadoEm");
    expect(res.body).toHaveProperty("atualizadoEm");
    expect(res.body).toHaveProperty("estaAtivo");
    expect(res.body).toHaveProperty("adm");
    expect(res.body).not.toHaveProperty("senha");
  });

  test("POST /medicos/register - Possível cadastrar um médico professor", async () => {
    const res = await request(app)
      .post("/medicos/register")
      .send(medicoProfessor);

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("nome");
    expect(res.body).toHaveProperty("email");
    expect(res.body).toHaveProperty("categoria");
    expect(res.body).toHaveProperty("criadoEm");
    expect(res.body).toHaveProperty("atualizadoEm");
    expect(res.body).toHaveProperty("estaAtivo");
    expect(res.body).toHaveProperty("adm");
    expect(res.body).not.toHaveProperty("senha");
  });

  test("POST /medicos/register -  Não é possível cadastrar um médico já cadastrado", async () => {
    const response = await request(app)
      .post("/medicos/register")
      .send(medicoNormal);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(400);
  });

  test("POST /medicos/register -  Não é possível cadastrar um professor já cadastrado", async () => {
    const response = await request(app)
      .post("/medicos/register")
      .send(medicoProfessor);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(400);
  });

  test("GET /medicos - Possível listar todos os médicos", async () => {
    const professorLoginResponse = await request(app)
      .post("/login")
      .send(loginMedicoProfessor);
    const response = await request(app)
      .get("/medicos")
      .set("Authorization", `Bearer ${professorLoginResponse.body.token}`);

    expect(response.body).toHaveLength(2);
    expect(response.status).toBe(200);
  });

  test("GET /medicos - Não é possível listar todos os médicos sem autorização", async () => {
    const normalDoctorLoginResponse = await request(app)
      .post("/login")
      .send(loginMedicoNormal);
    const response = await request(app)
      .get("/medicos")
      .set("Authorization", `Bearer ${normalDoctorLoginResponse.body.token}`);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(403);
  });

  test("PATCH /medicos/:id - É possível atualizar próprio usuário sem ser ADM", async () => {
    const medicoLoginResponse = await request(app)
      .post("/login")
      .send(loginMedicoNormal);

    const professorLoginResponse = await request(app)
      .post("/login")
      .send(loginMedicoProfessor);

    const doctorResponse = await request(app)
      .get("/medicos")
      .set("Authorization", `Bearer ${professorLoginResponse.body.token}`);

    const doctorTobeUpdated = doctorResponse.body.find(user => user.adm === false)

    const res = await request(app)
      .patch(`/medicos/${doctorTobeUpdated.id}`)
      .send(medicoAtualizadoCategoriaNormal)
      .set("Authorization", `Bearer ${medicoLoginResponse.body.token}`);

    expect(res.body).toHaveProperty("id");
    expect(res.body).toHaveProperty("criadoEm");
    expect(res.body).toHaveProperty("atualizadoEm");
    expect(res.body).toHaveProperty("nome");
    expect(res.body).toHaveProperty("email");
    expect(res.body).not.toHaveProperty("senha");
    expect(res.body).toHaveProperty("categoria");
    expect(res.body).toHaveProperty("estaAtivo");
    expect(res.body).toHaveProperty("adm");
    expect(res.body.categoria).toEqual("R2");
  });

  test("PATCH /medicos/:id - Não é possível atualizar um médico sem autorização ou ADM", async () => {
    const outroLoginResponse = await request(app)
      .post("/login")
      .send(loginMedicoNaoDono);
    const doctorTobeUpdated = await request(app)
      .get("/medicos")
      .set("Authorization", `Bearer ${outroLoginResponse.body.token}`);

    const res = await request(app)
      .patch(`/medicos/${doctorTobeUpdated.body.id}`)
      .send(medicoAtualizado)
      .set("Authorization", `Bearer ${outroLoginResponse.body.token}`);

    expect(res.status).toBe(401);
    expect(res.body).toHaveProperty("message");
  });

  test("DELETE /medicos/:id -  Não é possível desativar um médico sem ser professor", async () => {
    const doctorLoginResponse = await request(app)
      .post("/login")
      .send(loginMedicoNormal);
    const doctorTobeDeleted = await request(app)
      .get("/medicos")
      .set("Authorization", `Bearer ${doctorLoginResponse.body.token}`);

    const response = await request(app).delete(
      `/medicos/${doctorTobeDeleted.body.id}`
    );

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("DELETE /medicos/:id -  Não é possível desativar um médico com id inválido", async () => {
    const professorLoginResponse = await request(app)
      .post("/login")
      .send(loginMedicoProfessor);

    const response = await request(app)
      .delete(`/medicos/13970660-5dbe-423a-9a9d-5c23b37943cf`)
      .set("Authorization", `Bearer ${professorLoginResponse.body.token}`);

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("message");
  });

  test("DELETE /medicos/:id -  Possível desativar um médico", async () => {
    const professorLoginResponse = await request(app)
      .post("/login")
      .send(loginMedicoProfessor);

    const doctorTobeDeletedArray = await request(app)
      .get("/medicos")
      .set("Authorization", `Bearer ${professorLoginResponse.body.token}`);

    const doctorTobeDeleted = doctorTobeDeletedArray.body.find(user => user.adm === false)

    const response = await request(app)
    .delete(`/medicos/${doctorTobeDeleted.id}`)
    .set("Authorization", `Bearer ${professorLoginResponse.body.token}`);
    
    const arrayResult = await request(app)
      .get("/medicos")
      .set("Authorization", `Bearer ${professorLoginResponse.body.token}`);

    const userSelect = arrayResult.body.filter(user  => user.id === doctorTobeDeleted.id)

    expect(response.status).toBe(204);
    expect(userSelect[0].estaAtivo).toBe(false);
  });

  test("PATCH /medicos/:id - É possível atualizar um médico como ADM ou Professor", async () => {
    const professorLoginResponse = await request(app)
      .post("/login")
      .send(loginMedicoProfessor);

    const doctorResponse = await request(app)
      .get("/medicos")
      .set("Authorization", `Bearer ${professorLoginResponse.body.token}`);

    const doctorTobeUpdated = doctorResponse.body.find(user => user.adm === false)

    const res = await request(app)
      .patch(`/medicos/${doctorTobeUpdated.id}`)
      .send(medicoAtualizado)
      .set("Authorization", `Bearer ${professorLoginResponse.body.token}`);

    expect(res.body).toHaveProperty("id");
    expect(res.body).toHaveProperty("criadoEm");
    expect(res.body).toHaveProperty("atualizadoEm");
    expect(res.body).toHaveProperty("nome");
    expect(res.body).toHaveProperty("email");
    expect(res.body).not.toHaveProperty("senha");
    expect(res.body).toHaveProperty("categoria");
    expect(res.body).toHaveProperty("estaAtivo");
    expect(res.body).toHaveProperty("adm");
    expect(res.body.categoria).toEqual("Professor");
    expect(res.body.adm).toEqual(true);
    expect(res.body.nome).toEqual("Ricardo");
    expect(res.body.email).toEqual("ricardo@gmail.com");
  });
});
