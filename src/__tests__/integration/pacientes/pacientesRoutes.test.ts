import { DataSource } from "typeorm";
import AppDataSource from "../../../data-source";
import request from "supertest"
import app from "../../../app";
import { loginMedicoNaoDono, loginMedicoNormal, loginMedicoProfessor, medicoAtualizadoLogin, medicoNormal, medicoNormalNaoDono, medicoProfessor, pacienteAtualizado, pacienteAtualizadoSemPermissao, patiente } from "../../mocks";

describe("ROUTES - /patientes", () => {
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

    test("POST /pacientes/register - Possível criar um paciente", async () =>{
        await request(app).post('/medicos/register').send(medicoProfessor)
        const loginProfessor  =await request(app).post('/login').send(loginMedicoProfessor)
        const response = await request(app).post('/pacientes/register')
        .send(patiente).set('Authorization', `Bearer ${loginProfessor.body.token}`)

        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty('nome')
        expect(response.body).toHaveProperty('cpf')
        expect(response.body).toHaveProperty('email')
        expect(response.body).toHaveProperty('dataNascimento')
        expect(response.body).toHaveProperty('cidadeOrigem')
        expect(response.body).toHaveProperty('idade')
        expect(response.body).toHaveProperty('nomeBebe')
        expect(response.body).toHaveProperty('nomePai')
        expect(response.body).toHaveProperty('diagnostico')
        expect(response.body).toHaveProperty('procedimentos')
        expect(response.body).toHaveProperty('cariotipo')
        
    })

    test("POST /pacientes/register -  Não é possível criar um paciente que já existe", async () => {
        const loginProfessor  =await request(app).post('/login').send(loginMedicoProfessor)

        const response = await request(app).post('/pacientes/register')
        .send(patiente).set('Authorization', `Bearer ${loginProfessor.body.token}`)

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(409)     
    })

    test("GET /pacientes -  Possível listar todos os pacientes", async () => {
        const loginProfessor  =await request(app).post('/login').send(loginMedicoProfessor)

        const response = await request(app).get('/pacientes')
        .set("Authorization", `Bearer ${loginProfessor.body.token}`)

        expect(response.body).toHaveLength(1)
        expect(response.status).toBe(200)
    })

    test("GET /pacientes -  Não é possível listar todos os pacientes sem autenticação", async () => {        
        const response = await request(app).get('/pacientes')

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(401)    
    })
    
    test("GET /pacientes -  Não é possível listar todos os pacientes sem ser professor", async () => {
        await request(app).post('/medicos/register').send(medicoNormalNaoDono)

        const doctorLoginResponse = await request(app).post("/login").send(loginMedicoNaoDono);

        const response = await request(app).get('/pacientes')
        .set("Authorization", `Bearer ${doctorLoginResponse.body.token}`)

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(403)      
    })

    test("PATCH /pacientes/:id - É possível atualizar um paciente como ADM ou Professor", async () =>{
        const professorLoginResponse = await request(app).post("/login").send(loginMedicoProfessor);

        const patienteTobeUpdated = await request(app).get('/pacientes')
        .set("Authorization", `Bearer ${professorLoginResponse.body.token}`)
        
        const response = await request(app).patch(`/pacientes/${patienteTobeUpdated.body[0].id}`)
        .send(pacienteAtualizado).set("Authorization", `Bearer ${professorLoginResponse.body.token}`)

        expect(response.body).toHaveProperty('nome')
        expect(response.body).toHaveProperty('cpf')
        expect(response.body).toHaveProperty('email')
        expect(response.body).toHaveProperty('dataNascimento')
        expect(response.body).toHaveProperty('cidadeOrigem')
        expect(response.body).toHaveProperty('idade')
        expect(response.body).toHaveProperty('nomeBebe')
        expect(response.body).toHaveProperty('nomePai')
        expect(response.body).toHaveProperty('diagnostico')
        expect(response.body).toHaveProperty('procedimentos')
        expect(response.body).toHaveProperty('cariotipo')
        expect(response.body.nome).toEqual("Lucas da Silva Neto")
        expect(response.body.email).toEqual("lucas.silva@gmail.com")
        expect(response.body.nomeBebe).toEqual("Fabio da Silva")
    })

    test("PATCH /pacientes/:id - Não é possível atualizar o paciente sem autorização", async () =>{
        const medicoLoginResponse = await request(app).post("/login").send(medicoAtualizadoLogin);
        const professorLoginResponse = await request(app).post("/login").send(loginMedicoProfessor);

        const doctorTobeUpdated = await request(app).get('/pacientes')
        .set("Authorization", `Bearer ${professorLoginResponse.body.token}`)

        const res = await request(app).patch(`/pacientes/${doctorTobeUpdated.body[0].id}`)
        .send(pacienteAtualizadoSemPermissao).set("Authorization", `Bearer ${medicoLoginResponse.body.token}`)

        expect(res.status).toBe(401)
        expect(res.body).toHaveProperty("message")
    })
   
    test("DELETE /pacientes/:id -  Não é possível desativar um paciente sem autorização", async () => {
        const doctorLoginResponse = await request(app).post("/login").send(medicoNormalNaoDono);

        const professorLoginResponse = await request(app).post("/login").send(loginMedicoProfessor);

        const patienteTobeDeleted = await request(app).get('/pacientes')
        .set("Authorization", `Bearer ${professorLoginResponse.body.token}`)

        const response = await request(app).delete(`/pacientes/${patienteTobeDeleted.body[0].id}`)
        .set("Authorization", `Bearer ${doctorLoginResponse.body.token}`)

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(403)
             
    })

    test("DELETE /pacientes/:id -  Possível desativar um paciente", async () => {
        const professorLoginResponse = await request(app).post("/login").send(loginMedicoProfessor);

        const patienteTobeDeleted = await request(app).get('/pacientes')
        .set("Authorization", `Bearer ${professorLoginResponse.body.token}`)

        const response = await request(app).delete(`/pacientes/${patienteTobeDeleted.body[0].id}`)
        .set("Authorization", `Bearer ${professorLoginResponse.body.token}`)

        const findUser = await request(app).get('/pacientes')
        .set("Authorization", `Bearer ${professorLoginResponse.body.token}`)

        expect(response.status).toBe(204)
        expect(findUser.body[0].estaAtivo).toBe(false)
    })

    test("DELETE /pacientes/:id -  Não é possível desativar um paciente com estaAtivo = false", async () => {
        const professorLoginResponse = await request(app).post("/login").send(loginMedicoProfessor);

        const patienteTobeDeleted = await request(app).get('/pacientes')
        .set("Authorization", `Bearer ${professorLoginResponse.body.token}`)

        const response = await request(app).delete(`/pacientes/${patienteTobeDeleted.body[0].id}`)
        .set("Authorization", `Bearer ${professorLoginResponse.body.token}`)

        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty("message")
     
    })

    test("DELETE -  Não é possível deletar um paciente com id inválido", async () => {
        const professorLoginResponse = await request(app).post("/login").send(loginMedicoProfessor);
        
        const response = await request(app).delete(`/pacientes/13970660-5dbe-423a-9a9d-5c23b37943cf`)
        .set("Authorization", `Bearer ${professorLoginResponse.body.token}`)

        expect(response.status).toBe(404)
        expect(response.body).toHaveProperty("message")
    })
})