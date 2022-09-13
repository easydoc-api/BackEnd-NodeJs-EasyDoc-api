import AppDataSource from "../../data-source";
import { ExamesLaboratoriais } from "../../entities/examesLaboratoriais.entity";
import { ILabExamesRequest } from "../../interfaces/examesLaboratoriais";

export const examLabCreateService = async ({
  gs_rh,
  coombs,
  hb_ht,
  plaq,
  gj,
  gpd,
  vdrl,
  hbsag,
  antiHiv,
  antiHcv,
  antiHtlv,
  toxop,
  rubeola,
  cmv,
  tsh,
  eas,
  urocult,
  strep,
  eletro,
}: ILabExamesRequest) => {

  const examLabRepository = AppDataSource.getRepository(ExamesLaboratoriais);

  const examLab = examLabRepository.create({
    atualizadoEm: new Date(),
    data: new Date(),
    gs_rh,
    coombs,
    hb_ht,
    plaq,
    gj,
    gpd,
    vdrl,
    hbsag,
    antiHiv,
    antiHcv,
    antiHtlv,
    toxop,
    rubeola,
    cmv,
    tsh,
    eas,
    urocult,
    strep,
    eletro,
  })

  await examLabRepository.save(examLab)

  return examLab
}
