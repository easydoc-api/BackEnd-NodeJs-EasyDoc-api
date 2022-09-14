import AppDataSource from "../../data-source"
import { Paciente } from "../../entities/paciente.entity"

export const patientListService = () =>{
    const patientRepository = AppDataSource.getRepository(Paciente)

    const patients = patientRepository.find()

    return patients
}