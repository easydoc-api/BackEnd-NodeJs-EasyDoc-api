import AppDataSource from "../../data-source"
import { Medico } from "../../entities/medico.entity"
import { AppError } from "../../errors/AppError"

export const doctorDeleteService = async(id: string) =>{
    const doctorRepository = AppDataSource.getRepository(Medico)

    const doctor = await doctorRepository.findOne({where:{
        id
    }})

    if(!doctor){
        throw new AppError("Doctor not Found!", 404)
    }

    if(!doctor.estaAtivo){
        throw new AppError("Doctor is not active!", 400)
    }

    doctor.estaAtivo = false

    await doctorRepository.save(doctor)
}