import AppDataSource from "../../data-source"
import { Paciente } from "../../entities/paciente.entity"
import { AppError } from "../../errors/AppError"

export const patientDeleteService = async(id: string) =>{
    const patientRepository = AppDataSource.getRepository(Paciente)

    const patient = await patientRepository.findOne({where:{
        id
    }})

    if(!patient){
        throw new AppError("Patient not Found!", 404)
    }

    if(!patient.estaAtivo){
        throw new AppError("Patient is not active!", 400)
    }

    patient.estaAtivo = false

    await patientRepository.save(patient)
}