import AppDataSource from "../../data-source";

import { Consulta } from "../../entities/consulta.entity";

const apointmentListService = () => {
  const apointmentRepository = AppDataSource.getRepository(Consulta);

  const apointment = apointmentRepository.find();

  return apointment;
};

export default apointmentListService;
