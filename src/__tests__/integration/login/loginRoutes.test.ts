import { DataSource } from "typeorm";
import AppDataSource from "../../../data-source";
import request from "supertest"
import app from "../../../app";
import { loginMedico, loginMedicoProfessorSemAtualizar, medicoProfessorSemAtualizar } from "../../mocks";

describe("ROUTES - /login", () => {
    let connection: DataSource

    beforeAll(async() => {
        await AppDataSource.initialize().then((res) => {
            connection = res
        }).catch((err) => {
            console.error("Error during Data Source initialization", err)
        })
    })

    afterAll(async() => {
        await connection.destroy()
    })

    test("POST /login - É possivel logar", async () =>{
        await request(app).post('/medicos/register').send(medicoProfessorSemAtualizar)
        const res = await request(app).post('/login').send(loginMedicoProfessorSemAtualizar)

        expect(res.body).toHaveProperty("token")
    })

    test("POST /login - Não é possivel logar com dados incorretos", async () =>{
        const res = await request(app).post('/login').send(loginMedico)

        expect(res.status).toBe(401)
        expect(res.body).toHaveProperty("message")
    })
})