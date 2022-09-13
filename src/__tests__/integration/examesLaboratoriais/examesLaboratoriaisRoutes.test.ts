import { DataSource } from "typeorm";
import AppDataSource from "../../../data-source";
import request from "supertest";
import app from "../../../app";
import {
  examesLaboratoriais,
  examesLaboratoriaisAtualizados,
  loginMedicoNormal,
  loginMedicoProfessor,
  loginMedicoProfessorSemAtualizar,
  medicoProfessor,
  medicoProfessorSemAtualizar,
  patiente,
} from "../../mocks";

describe("/examesLaboratoriais", () => {
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

  test("POST /exames_laboratoriais/register - Possível criar um exame laboratorial", async () => {
    await request(app).post("/medicos/register").send(medicoProfessorSemAtualizar);
    const login = await request(app).post("/login").send(loginMedicoProfessorSemAtualizar);
    const res = await request(app)
      .post("/exames_laboratoriais/register")
      .send(examesLaboratoriais)
      .set("Authorization", `Bearer ${login.body.token}`);

    expect(res.body).toHaveProperty("gs_rh");
    expect(res.body).toHaveProperty("coombs");
    expect(res.body).toHaveProperty("hb_ht");
    expect(res.body).toHaveProperty("plaq");
    expect(res.body).toHaveProperty("gj");
    expect(res.body).toHaveProperty("gpd");
    expect(res.body).toHaveProperty("vdrl");
    expect(res.body).toHaveProperty("hbsag");
    expect(res.body).toHaveProperty("antiHiv");
    expect(res.body).toHaveProperty("antiHcv");
    expect(res.body).toHaveProperty("antiHtlv");
    expect(res.body).toHaveProperty("toxop");
    expect(res.body).toHaveProperty("rubeola");
    expect(res.body).toHaveProperty("cmv");
    expect(res.body).toHaveProperty("tsh");
    expect(res.body).toHaveProperty("eas");
    expect(res.body).toHaveProperty("urocult");
    expect(res.body).toHaveProperty("strep");
    expect(res.body).toHaveProperty("eletro");
    expect(res.body.gs_rh).toEqual("a");
    expect(res.body.coombs).toEqual("a");
    expect(res.body.hb_ht).toEqual("a");
    expect(res.body.plaq).toEqual("a");
    expect(res.body.gj).toEqual("a");
    expect(res.body.gpd).toEqual("a");
    expect(res.body.vdrl).toEqual("a");
    expect(res.body.hbsag).toEqual("a");
    expect(res.body.antiHiv).toEqual("a");
    expect(res.body.antiHcv).toEqual("a");
    expect(res.body.antiHtlv).toEqual("a");
    expect(res.body.toxop).toEqual("a");
    expect(res.body.rubeola).toEqual("a");
    expect(res.body.cmv).toEqual("a");
    expect(res.body.tsh).toEqual("a");
    expect(res.body.eas).toEqual("a");
    expect(res.body.urocult).toEqual("a");
    expect(res.body.strep).toEqual("a");
    expect(res.body.eletro).toEqual("a");
  });

  test("POST /exames_laboratoriais/register - Não é possível criar um exame laboratorial sem autorização", async () => {
    const res = await request(app)
      .post("/exames_laboratoriais/register")
      .send(examesLaboratoriais);

    expect(res.body).toHaveProperty("message");
    expect(res.status).toBe(401);
  });

  test("GET /exames_laboratoriais - Possível listar todos os exames", async () => {
    const loginProfessor = await request(app)
      .post("/login")
      .send(loginMedicoProfessorSemAtualizar);
    const res = await request(app)
      .get("/exames_laboratoriais")
      .set("Authorization", `Bearer ${loginProfessor.body.token}`);

    expect(res.body).toHaveLength(1);
    expect(res.status).toBe(200);
  });

  test("GET /exames_laboratoriais - Não é possível listar os exames sem autenticação", async () => {
    const res = await request(app).get("/exames_laboratoriais");

    expect(res.body).toHaveProperty("message");
    expect(res.status).toBe(401);
  });

  test("GET /exames_laboratoriais/paciente/:id - Possível listar um exame de um paciente com autorização", async () => {
    const loginProfessor = await request(app)
      .post("/login")
      .send(loginMedicoProfessorSemAtualizar);

    const exameSelecionado = await request(app)
      .get("/exames_laboratoriais")
      .set("Authorization", `Bearer ${loginProfessor.body.token}`);

    const res = await request(app)
      .get(`/exames_laboratoriais/paciente/${exameSelecionado.body[0].id}`)
      .set("Authorization", `Bearer ${loginProfessor.body.token}`);

    expect(res.body).toHaveProperty("id");
    expect(res.body).toHaveProperty("gs_rh");
    expect(res.body).toHaveProperty("coombs");
    expect(res.body).toHaveProperty("hb_ht");
    expect(res.body).toHaveProperty("plaq");
    expect(res.body).toHaveProperty("gj");
    expect(res.body).toHaveProperty("gpd");
    expect(res.body).toHaveProperty("vdrl");
    expect(res.body).toHaveProperty("hbsag");
    expect(res.body).toHaveProperty("antiHiv");
    expect(res.body).toHaveProperty("antiHcv");
    expect(res.body).toHaveProperty("antiHtlv");
    expect(res.body).toHaveProperty("toxop");
    expect(res.body).toHaveProperty("rubeola");
    expect(res.body).toHaveProperty("cmv");
    expect(res.body).toHaveProperty("tsh");
    expect(res.body).toHaveProperty("eas");
    expect(res.body).toHaveProperty("urocult");
    expect(res.body).toHaveProperty("strep");
    expect(res.body).toHaveProperty("eletro");
    expect(res.body).toHaveProperty("estaAtivo");
    expect(res.body).toHaveProperty("atualizadoEm");
    expect(res.body).toHaveProperty("data");
  });

  test("GET /exames_laboratoriais/paciente/:id - Não é possível atualizar um exame de um paciente sem autorização", async () => {
    const loginMedico = await request(app)
      .post("/login")
      .send(loginMedicoProfessorSemAtualizar);

    const exameSelecionado = await request(app)
      .get("/exames_laboratoriais")
      .set("Authorization", `Bearer ${loginMedico.body.token}`);

    const res = await request(app).get(
      `/exames_laboratoriais/paciente/${exameSelecionado.body[0].id}`
    );

    expect(res.body).toHaveProperty("message");
    expect(res.status).toBe(401);
  });

  test("GET /exames_laboratoriais/paciente/:id - Não é possível listar exames de um paciente com id inválido", async () => {
    const loginProfessor = await request(app)
      .post("/login")
      .send(loginMedicoProfessorSemAtualizar);

    const res = await request(app)
      .get(
        `/exames_laboratoriais/paciente/13970660-5dbe-423a-9a9d-5c23b37943cf`
      )
      .send(examesLaboratoriaisAtualizados)
      .set("Authorization", `Bearer ${loginProfessor.body.token}`);

    expect(res.body).toHaveProperty("message");
    expect(res.status).toBe(404);
  });

  test("PATCH /exames_laboratoriais/paciente/:id - Possível atualizar um exame de um paciente com autorização", async () => {
    const loginProfessor = await request(app)
      .post("/login")
      .send(loginMedicoProfessorSemAtualizar);

    const exameSelecionado = await request(app)
      .get("/exames_laboratoriais")
      .set("Authorization", `Bearer ${loginProfessor.body.token}`);

    const res = await request(app)
      .patch(`/exames_laboratoriais/${exameSelecionado.body[0].id}`)
      .send(examesLaboratoriaisAtualizados)
      .set("Authorization", `Bearer ${loginProfessor.body.token}`);

    expect(res.body).toHaveProperty("hbsag");
    expect(res.body).toHaveProperty("antiHiv");
    expect(res.body).toHaveProperty("antiHcv");
    expect(res.body).toHaveProperty("antiHtlv");
    expect(res.body).toHaveProperty("toxop");
    expect(res.body).toHaveProperty("rubeola");
    expect(res.body).toHaveProperty("cmv");
    expect(res.body).toHaveProperty("tsh");
    expect(res.body).toHaveProperty("eas");
    expect(res.body.hbsag).toEqual("b");
    expect(res.body.antiHiv).toEqual("b");
    expect(res.body.antiHcv).toEqual("b");
    expect(res.body.antiHtlv).toEqual("b");
    expect(res.body.toxop).toEqual("b");
    expect(res.body.rubeola).toEqual("b");
    expect(res.body.cmv).toEqual("b");
    expect(res.body.tsh).toEqual("b");
    expect(res.body.eas).toEqual("b");
  });

  test("PATCH /exames_laboratoriais - Não é possível atualizar os exames sem autorização", async () => {
    const loginMedico = await request(app)
      .post("/login")
      .send(loginMedicoProfessorSemAtualizar);

    const exameSelecionado = await request(app)
      .get("/exames_laboratoriais")
      .set("Authorization", `Bearer ${loginMedico.body.token}`);

    const res = await request(app)
      .patch(`/exames_laboratoriais/${exameSelecionado.body[0].id}`)
      .send(examesLaboratoriaisAtualizados);

    expect(res.body).toHaveProperty("message");
    expect(res.status).toBe(401);
  });

  test("PATCH /exames_laboratoriais/:id - Não é possível listar exames de um paciente com id inválido", async () => {
    const loginProfessor = await request(app)
      .post("/login")
      .send(loginMedicoProfessorSemAtualizar);

    const res = await request(app)
      .patch(
        `/exames_laboratoriais/13970660-5dbe-423a-9a9d-5c23b37943cf`
      )
      .send(examesLaboratoriaisAtualizados)
      .set("Authorization", `Bearer ${loginProfessor.body.token}`);

    expect(res.body).toHaveProperty("message");
    expect(res.status).toBe(404);
  });
});
