import AppDataSource from "../../data-source";
import { Consulta } from "../../entities/consulta.entity";
import { AppError } from "../../errors/AppError";

export const apointmentDeleteService = async (id: string) => {
  const apointmentRepository = AppDataSource.getRepository(Consulta);

  const apointment = await apointmentRepository.find();

  const target = apointment.find((apointment) => apointment.id === id);

  if(target){
    target.estaAtivo = false
  }else{
    throw new AppError("apointment dont exists",404);
  }
  return target;
};

