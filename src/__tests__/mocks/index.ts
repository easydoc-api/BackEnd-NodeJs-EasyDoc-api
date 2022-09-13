import { ILabExamesRequest } from "../../interfaces/examesLaboratoriais";
import { IConsultZeroRequest } from "../../interfaces/consultasZero";
import { IConsultRequest } from "../../interfaces/consultas";

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

export const medicoAtualizado: IMedicoUpdate = {
  nome: "Ricardo",
  email: "ricardo@gmail.com",
  categoria: "Professor",
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
  cariotipo: "banda g"
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

export const criarNovaConsultaZero: IConsultZeroRequest = {
  paridade: "Paridade é o número de partos depois da 20ª semana.",
  consanguinidade:
    "Consanguinidade é a afinidade por laços de sangue entre indivíduos aparentados, que são geneticamente semelhantes.",
  idadeGestacional: 12,
  dataMenstruacao: "2022-12-09",
  primeiroUltrassom: "2022-12-09",
  semanaGestacional: 2,
  diaGestacional: 12,
  historiaPregressa:
    "Adquire-se informações sobre toda a história médica do paciente, mesmo das condições que não estejam relacionadas com a doença atual",
  historiaGinecologicaObstetrica:
    "Se a paciente possuir histórico obstétrico, deve-se registrar o número de gestações ocorridas, o tipo de parto,  peso ao nascer, idade gestacional em que ocorreu o parto, ano em que o parto ocorreu, idade atual dos filhos e quaisquer problemas que tenham ocorrido durante gestações anteriores",
};

export const consult: IConsultRequest = {
  conduta: "TESTE de APOINTMENT",
  idadeGestacional: 1,
  peso: 2,
  pressaoArterial: "doze por oito",
  apresentacao: "paciente está bem",
  batimentoCardFetal: "doze por oito",
  edema: "inchaço leve",
  movimentacaoFetal: true,
  retorno: "10-12-2022",
  toqueVaginal: "realizado",
  uteroFita: "30 cm ",
};
