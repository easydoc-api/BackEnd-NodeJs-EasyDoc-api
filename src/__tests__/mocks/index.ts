import { IMedicoLogin, IMedicoRequest } from "../../interfaces/medicos"
import { IPacienteRequest } from "../../interfaces/pacientes"


export const medicoProfessor : IMedicoRequest = {
    nome: "Kamila",
    email: "kamila@gmail.com",
    senha: "1234", 
    categoria: "R4" 
}

export const medicoNormal : IMedicoRequest = {
    nome: "Cayo",
    email: "cayo@gmail.com",
    senha: "1234", 
    categoria: "R2" 
}

export const loginMedicoNormal: IMedicoLogin = {
    email: "cayo@gmail.com",
    senha: "1234", 
}

export const loginMedicoProfessor: IMedicoLogin = {
    email: "kamila@gmail.com",
    senha: "1234",
}

export const patiente: IPacienteRequest ={
    nome: "Matheus De Souza",
    cpf: '123.456.789-10',
    email: 'pedro@gmail.com',
    dataNascimento: "01/01/2000",
    cidadeOrigem: "Piracicaba", 
    idade: 22,
    nomeBebe: "Enzo da Silva",
    nomePai: "Matheus De Souza",
    diagnostico: "braço quebrado", 
    procedimentos: "desquebrar o braço",
    cariotipo: "banda g",
}
