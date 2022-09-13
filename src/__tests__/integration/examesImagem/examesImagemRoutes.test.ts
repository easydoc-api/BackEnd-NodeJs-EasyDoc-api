import { DataSource } from "typeorm";
import AppDataSource from "../../../data-source";
import request from "supertest"
import app from "../../../app";
import { examesDeImagemAtualizados, examesDeImagemCompleto, loginMedico, loginMedicoNormal, loginMedicoProfessor, loginMedicoProfessorSemAtualizar, medicoAtualizadoLogin, medicoProfessorSemAtualizar } from "../../mocks";

describe("ROUTES - /exames_imagem", () => {
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

    test("POST /exame_imagem/register - É possível criar um exame de imagem com autorização", async () =>{
        await request(app).post('/medicos/register').send(medicoProfessorSemAtualizar)
        const doctorLogin = await request(app).post('/login').send(loginMedicoProfessorSemAtualizar)

        const res = await request(app).post('/exame_imagem/register')
        .send(examesDeImagemCompleto).set('Authorization', `Bearer ${doctorLogin.body.token}`)

        expect(res.body).toHaveProperty("id")
        expect(res.body).toHaveProperty("laudo")
        expect(res.body).toHaveProperty("anexos")
        expect(res.body).toHaveProperty("data")
        expect(res.body).toHaveProperty("atualizadoEm")
        expect(res.body).toHaveProperty("estaAtivo")
    })

    test("POST /exame_imagem/register - É possível criar um exame de imagem sem autorização", async () =>{
        const res = await request(app).post('/exame_imagem/register')
        .send(examesDeImagemCompleto)

        expect(res.body).toHaveProperty("message")
        expect(res.status).toBe(401)
    })

    test("GET /exame_imagem - É possível listar todos os exames de imagens", async () =>{
        const doctorLogin = await request(app).post('/login').send(loginMedicoProfessorSemAtualizar)

        const res = await request(app).get('/exame_imagem')
        .set('Authorization', `Bearer ${doctorLogin.body.token}`)

        expect(res.body).toHaveLength(1)
        expect(res.status).toBe(200)
    })

    test("GET /exame_imagem - É possível listar todos os exames de imagens sem autorização", async () =>{
        const res = await request(app).get('/exame_imagem')
        

        expect(res.body).toHaveProperty("message")
        expect(res.status).toBe(401)
    })
    
    test("GET /exame_imagem/:id - É possível listar um exame de imagem com autorização", async () =>{
        const doctorLogin = await request(app).post('/login').send(loginMedicoProfessorSemAtualizar)

        const exams = await request(app).get('/exame_imagem')
        .set('Authorization', `Bearer ${doctorLogin.body.token}`)

        const res = await request(app).get(`/exame_imagem/${exams.body[0].id}`)
        .set('Authorization',`Bearer ${doctorLogin.body.token}`)

        expect(res.body).toHaveProperty("id")
        expect(res.body).toHaveProperty("data")
        expect(res.body).toHaveProperty("atualizadoEm")
        expect(res.body).toHaveProperty("laudo")
        expect(res.body).toHaveProperty("anexos")
        expect(res.body).toHaveProperty("estaAtivo")
        expect(res.status).toBe(200)
    })

    test("GET /exame_imagem/:id - É possível listar um exame de imagem sem autorização", async () =>{
        const doctorLogin = await request(app).post('/login').send(loginMedicoProfessorSemAtualizar)

        const exams = await request(app).get('/exame_imagem')
        .set('Authorization', `Bearer ${doctorLogin.body.token}`)

        const res = await request(app).get(`/exame_imagem/${exams.body[0].id}`)
        
        expect(res.body).toHaveProperty("message")
        expect(res.status).toBe(401)
    })
    
    test("PATCH /exame_imagem/:id - É possível atualizar um exame de imagem com autorização", async () =>{
        const doctorLogin = await request(app).post('/login').send(loginMedicoProfessorSemAtualizar)

        const exams = await request(app).get('/exame_imagem')
        .set('Authorization', `Bearer ${doctorLogin.body.token}`)

        const res = await request(app).patch(`/exame_imagem/${exams.body[0].id}`)
        .send(examesDeImagemAtualizados).set('Authorization', `Bearer ${doctorLogin.body.token}`)
        
        expect(res.body).toHaveProperty("id")
        expect(res.body).toHaveProperty("data")
        expect(res.body).toHaveProperty("atualizadoEm")
        expect(res.body).toHaveProperty("laudo")
        expect(res.body).toHaveProperty("anexos")
        expect(res.body).toHaveProperty("estaAtivo")
        expect(res.body.laudo).toEqual("Paciente caiu da escada por estar de chinelo")
        expect(res.status).toBe(200)
    })

    test("PATCH /exame_imagem/:id - Não é possível atualizar um exame de imagem sem autorização", async () =>{
        const doctorLogin = await request(app).post('/login').send(loginMedicoProfessorSemAtualizar)

        const exams = await request(app).get('/exame_imagem')
        .set('Authorization', `Bearer ${doctorLogin.body.token}`)
        
        const res = await request(app).patch(`/exame_imagem/${exams.body[0].id}`)
        .send(examesDeImagemAtualizados)
        
        expect(res.body).toHaveProperty("message")
        expect(res.status).toBe(401)
    })

    test("DELETE /exame_imagem/:id - É possível desativar um exame de imagem com autorização", async () =>{
        const professorLogin = await request(app).post('/login').send(loginMedicoProfessorSemAtualizar)

        const exams = await request(app).get('/exame_imagem')
        .set('Authorization', `Bearer ${professorLogin.body.token}`)

        const res = await request(app).delete(`/exame_imagem/${exams.body[0].id}`)
        .set('Authorization', `Bearer ${professorLogin.body.token}`)

        const examsDesativated = await request(app).get('/exame_imagem')
        .set('Authorization', `Bearer ${professorLogin.body.token}`)

        expect(res.status).toBe(204)
        expect(examsDesativated.body[0].estaAtivo).toEqual(false)
    })

    test("DELETE /exame_imagem/:id - Não é possível desativar um exame de imagem sem autorização", async () =>{
        const doctorLogin = await request(app).post('/login').send(loginMedicoProfessorSemAtualizar)

        const exams = await request(app).get('/exame_imagem')
        .set('Authorization', `Bearer ${doctorLogin.body.token}`)

        const res =await request(app).delete(`/exame_imagem/${exams.body[0].id}`)

        expect(res.body).toHaveProperty("message")
        expect(res.status).toBe(401)
    })
})