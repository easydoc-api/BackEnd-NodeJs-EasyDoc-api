import { ILabExamesRequest } from "../../interfaces/examesLaboratoriais";
import {
  IMedicoLogin,
  IMedicoRequest,
  IMedicoUpdate,
} from "../../interfaces/medicos";
import { IPacienteRequest, IPacienteUpdate } from "../../interfaces/pacientes";

export const medicoProfessor: IMedicoRequest = {
  nome: "Kamila",
  email: "kamila@gmail.com",
  senha: "123456",
  categoria: "R4",
};

export const loginMedicoProfessor: IMedicoLogin = {
    email: "kamila@gmail.com",
    senha: "123456",
};

export const medicoNormal: IMedicoRequest = {
  nome: "Cayo",
  email: "cayo@gmail.com",
  senha: "123456",
  categoria: "R2",
};

export const medicoNormalNaoDono: IMedicoRequest = {
  nome: "Raony",
  email: "raony@gmail.com",
  senha: "123456",
  categoria: "R2",
};

export const medicoAtualizado: IMedicoUpdate = {
  nome: "Ricardo",
  email: "ricardo@gmail.com",
  categoria: "Professor",
};

export const medicoAtualizadoCategoriaAdm: IMedicoUpdate = {
  categoria: "R4",
};

export const medicoAtualizadoCategoriaNormal: IMedicoUpdate = {
  categoria: "R2",
};

export const loginMedicoNormal: IMedicoLogin = {
  email: "cayo@gmail.com",
  senha: "123456",
};

export const loginMedicoNaoDono: IMedicoLogin = {
  email: "raony@gmail.com",
  senha: "123456",
};

export const loginMedico: IMedicoLogin = {
  email: "emailErrado@gmail.com",
  senha: "senhaForteMasNãoCorreta",
};

export const patiente: IPacienteRequest = {
  nome: "Matheus De Souza",
  cpf: "12345678910",
  email: "pedro@gmail.com",
  dataNascimento: "01/01/2000",
  cidadeOrigem: "Piracicaba",
  idade: 22,
  nomeBebe: "Enzo da Silva",
  nomePai: "Matheus De Souza",
  diagnostico: "braço quebrado",
  procedimentos: "desquebrar o braço",
  cariotipo: "banda g",
};

export const pacienteAtualizado: IPacienteUpdate = {
  nome: "Lucas da Silva Neto",
  email: "lucas.silva@gmail.com",
  nomeBebe: "Fabio da Silva",
};

export const pacienteAtualizadoSemPermissao: IPacienteUpdate = {
  nome: "Abc Nome Não Autorizado",
};

export const examesLaboratoriais: ILabExamesRequest = {
  gs_rh: "a",
  coombs: "a",
  hb_ht: "a",
  plaq: "a",
  gj: "a",
  gpd: "a",
  vdrl: "a",
  hbsag: "a",
  antiHiv: "a",
  antiHcv: "a",
  antiHtlv: "a",
  toxop: "a",
  rubeola: "a",
  cmv: "a",
  tsh: "a",
  eas: "a",
  urocult: "a",
  strep: "a",
  eletro: "a",
};

export const examesLaboratoriaisAtualizados: ILabExamesRequest = {
    hbsag: "b",
    antiHiv: "b",
    antiHcv: "b",
    antiHtlv: "b",
    toxop: "b",
    rubeola: "b",
    cmv: "b",
    tsh: "b",
    eas: "b",
};
