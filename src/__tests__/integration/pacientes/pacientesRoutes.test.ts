import { DataSource } from "typeorm";
import AppDataSource from "../../../data-source";
import request from "supertest"
import app from "../../../app";
import { loginMedicoProfessor, medicoNormal, medicoProfessor, pacienteAtualizado, pacienteAtualizadoSemPermissao, patiente } from "../../mocks";

describe("/patientes", () => {
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
        const response = await request(app).post('/pacientes/register').send(patiente)

        expect(response.body).toHaveProperty('nome')
        expect(response.body).toHaveProperty('cpf')
        expect(response.body).toHaveProperty('email')
        expect(response.body).toHaveProperty('dataNascimento')
        expect(response.body).toHaveProperty('cidadeOrigem')
        expect(response.body).toHaveProperty('idade')
        expect(response.body).toHaveProperty('nomeDoBebe')
        expect(response.body).toHaveProperty('nomeDoPai')
        expect(response.body).toHaveProperty('diagnostico')
        expect(response.body).toHaveProperty('procedimentos')
        expect(response.body).toHaveProperty('cariotipo')
        expect(response.body.name).toEqual("Matheus De Souza")
        expect(response.body.cpf).toEqual("123.456.789-10")
        expect(response.body.email).toEqual("pedro@gmail.com")
        expect(response.body.cidadeOrigem).toEqual("Piracicaba")
        expect(response.body.nomeDoPai).toEqual("Matheus De Souza")
        expect(response.body.nomeDoBebe).toEqual("Enzo da Silva")
        expect(response.status).toBe(201)
        
    })

    test("POST /pacientes/register -  Não é possível criar um paciente que já existe",async () => {
        const response = await request(app).post('/pacientes/register').send(patiente)

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(400)
             
    })

    test("GET /pacientes -  Possível listar todos os pacientes",async () => {
        await request(app).post('/medico/register').send(medicoProfessor)
        await request(app).post('/pacientes').send(patiente) 

        const professorLoginResponse = await request(app).post("/login").send(medicoProfessor);
        const response = await request(app).get('/pacientes').set("Authorization", `Bearer ${professorLoginResponse.body.token}`)

        expect(response.body).toHaveLength(2)
        expect(response.status).toBe(200)
     
    })

    test("GET /pacientes -  Não é possível listar todos os pacientes sem autenticação",async () => {
        const response = await request(app).get('/pacientes')

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(401)
             
    })
    
    test("GET /pacientes -  Não é possível listar todos os pacientes sem ser professor",async () => {
        const doctorLoginResponse = await request(app).post("/login").send(medicoNormal);
        const response = await request(app).get('/pacientes').set("Authorization", `Bearer ${doctorLoginResponse.body.token}`)

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(403)
             
    })

    test("PATCH /pacientes/:id - É possível atualizar um paciente como ADM ou Professor", async () =>{
        const professorLoginResponse = await request(app).post("/login").send(medicoProfessor);
        const patienteTobeUpdated = await request(app).get('/patientes').set("Authorization", `Bearer ${professorLoginResponse.body.token}`)

        const response = await request(app).patch(`/patientes/${patienteTobeUpdated.body[0].id}`)
        .send(pacienteAtualizado).set("Authorization", `Bearer ${professorLoginResponse.body.token}`)

        expect(response.body).toHaveProperty('nome')
        expect(response.body).toHaveProperty('cpf')
        expect(response.body).toHaveProperty('email')
        expect(response.body).toHaveProperty('dataNascimento')
        expect(response.body).toHaveProperty('cidadeOrigem')
        expect(response.body).toHaveProperty('idade')
        expect(response.body).toHaveProperty('nomeDoBebe')
        expect(response.body).toHaveProperty('nomeDoPai')
        expect(response.body).toHaveProperty('diagnostico')
        expect(response.body).toHaveProperty('procedimentos')
        expect(response.body).toHaveProperty('cariotipo')
        expect(response.body.name).toEqual("Lucas da Silva Neto")
        expect(response.body.email).toEqual("lucas.silva@gmail.com")
        expect(response.body.nomeDoBebe).toEqual("Fabio da Silva")
    })

    test("PATCH /pacientes/:id - Não é possível atualizar o paciente sem autorização", async () =>{
        const medicoLoginResponse = await request(app).post("/login").send(medicoNormal);
        const doctorTobeUpdated = await request(app).get('/medicos').set("Authorization", `Bearer ${medicoLoginResponse.body.token}`)

        const res = await request(app).patch(`/medicos/${doctorTobeUpdated.body[0].id}`)
        .send(pacienteAtualizadoSemPermissao).set("Authorization", `Bearer ${medicoLoginResponse.body.token}`)

        expect(res.status).toBe(401)
        expect(res.body).toHaveProperty("message")
    })
   
    test("DELETE /pacientes/:id -  Não é possível deletar um paciente",async () => {
        const doctorLoginResponse = await request(app).post("/login").send(medicoNormal);
        const professorLoginResponse = await request(app).post("/login").send(medicoProfessor);
        const patienteTobeDeleted = await request(app).get('/pacientes').set("Authorization", `Bearer ${professorLoginResponse.body.token}`)

        const response = await request(app).delete(`/pacientes/${patienteTobeDeleted.body[0].id}`).set("Authorization", `Bearer ${doctorLoginResponse.body.token}`)

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(403)
             
    })

    test("DELETE /pacientes/:id -  Possível desativar um paciente",async () => {
        await request(app).post('/medicos/register').send(medicoProfessor)
        await request(app).post('/pacientes').send(patiente) 

        const professorLoginResponse = await request(app).post("/login").send(loginMedicoProfessor);
        const patienteTobeDeleted = await request(app).get('/pacientes').set("Authorization", `Bearer ${professorLoginResponse.body.token}`)

        const response = await request(app).delete(`/pacientes/${patienteTobeDeleted.body[0].id}`).set("Authorization", `Bearer ${professorLoginResponse.body.token}`)
        const findUser = await request(app).get('/pacientes').set("Authorization", `Bearer ${professorLoginResponse.body.token}`)

        expect(response.status).toBe(204)
        expect(findUser.body[0].isActive).toBe(false)
     
    })

    test("DELETE /pacientes/:id -  Não é possível desativar um paciente com estaAtivo = false",async () => {
        await request(app).post('/medicos/register').send(medicoProfessor)
        await request(app).post('/pacientes').send(patiente) 

        const professorLoginResponse = await request(app).post("/login").send(loginMedicoProfessor);
        const patienteTobeDeleted = await request(app).get('/pacientes').set("Authorization", `Bearer ${professorLoginResponse.body.token}`)

        const response = await request(app).delete(`/pacientes/${patienteTobeDeleted.body[0].id}`).set("Authorization", `Bearer ${professorLoginResponse.body.token}`)
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty("message")
     
    })

    test("DELETE -  Não é possível deletar um paciente com id inválido",async () => {
        await request(app).post('/medicos/register').send(medicoProfessor)
        await request(app).post('/pacientes').send(patiente) 

        const professorLoginResponse = await request(app).post("/login").send(loginMedicoProfessor);
        
        const response = await request(app).delete(`/paciente/13970660-5dbe-423a-9a9d-5c23b37943cf`).set("Authorization", `Bearer ${professorLoginResponse.body.token}`)
        expect(response.status).toBe(404)
        expect(response.body).toHaveProperty("message")
     
    })
})