import { instanceToPlain } from "class-transformer"
import AppDataSource from "../../data-source"
import { Medico } from "../../entities/medico.entity"

export const doctorListService = () =>{
    const doctorRepository = AppDataSource.getRepository(Medico)

    const employees = doctorRepository.find()

    return instanceToPlain(employees)
}