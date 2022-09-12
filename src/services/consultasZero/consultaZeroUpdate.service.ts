import AppDataSource from "../../data-source";
import { ConsultaZero } from "../../entities/consultaZero.entity";
import { AppError } from "../../errors/AppError";
import { IAppointmentZeroUpdated } from "../../interfaces/consultasZero";

export const appointmentZeroUpdatedService = async (
  data: IAppointmentZeroUpdated,
  id: string,
  )  => {

    const appointmentZeroRepository = AppDataSource.getRepository(ConsultaZero)

    const appointmentZero = await appointmentZeroRepository.findOne({
      where: {
        id
      }
    })

    if(!appointmentZero){
      throw new AppError("Consulta não encontrada", 404);
    }

    const updatedAppointmentZero = {
      ...appointmentZero,
      ...data,
      atulizadoEm: new Date()
    }

    await appointmentZeroRepository.save(updatedAppointmentZero)
   
    return updatedAppointmentZero
  }