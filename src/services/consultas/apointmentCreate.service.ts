import AppDataSource from "../../data-source";
import { Consulta } from "../../entities/consulta.entity";
import { IConsultRequest } from "../../interfaces/consultas";

export const apointmentCreateService = async ({
  conduta,
  idadeGestacional,
  peso,
  pressaoArterial,
  apresentacao,
  batimentoCardFetal,
  edema,
  movimentacaoFetal,
  retorno,
  toqueVaginal,
  uteroFita,
}: IConsultRequest) => {
  const consultRepository = AppDataSource.getRepository(Consulta);

  const consult = consultRepository.create({
    apresentacao: apresentacao,
    atualizadoEm: new Date(),
    batimentoCardFetal: batimentoCardFetal,
    conduta: conduta,
    data: new Date(),
    edema: edema,
    idadeGestacional: idadeGestacional,
    movimentacaoFetal: movimentacaoFetal,
    peso: peso,
    pressãoArterial: pressaoArterial,
    retorno: retorno,
    toqueVaginal: toqueVaginal,
    uteroFita: uteroFita,
  });

  await consultRepository.save(consult);

  return consult;
};
