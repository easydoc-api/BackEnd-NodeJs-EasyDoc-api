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
    data: new Date(),
    peso: peso,
    edema: edema,
    conduta: conduta,
    apresentacao: apresentacao,
    idadeGestacional: idadeGestacional,
    batimentoCardFetal: batimentoCardFetal,
    movimentacaoFetal: movimentacaoFetal,
    pressaoArterial: pressaoArterial,
    toqueVaginal: toqueVaginal,
    uteroFita: uteroFita,
    atualizadoEm: new Date(),
    retorno: retorno,
  });

  await consultRepository.save(consult);

  return consult;
};
