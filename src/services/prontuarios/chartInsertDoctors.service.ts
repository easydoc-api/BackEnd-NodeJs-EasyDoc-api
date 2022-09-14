import AppDataSource from "../../data-source"
import { Medico } from "../../entities/medico.entity"
import { Prontuario } from "../../entities/prontuario.entity"
import { AppError } from "../../errors/AppError"


export const chartInsertDoctorService = async (userId : string, id : string) => {
  const chartRepository = AppDataSource.getRepository(Prontuario)
  const doctorRepository = AppDataSource.getRepository(Medico)
  
  const chartSelected = await chartRepository.findOne({where:{
    id
  },
  relations:{
    medicos: true
  }
  })
  
  const doctorSelected = await doctorRepository.findOne({where:{
    id: userId
  }})

  if(!chartSelected){
    throw new AppError("Chart not found!", 404)
  }

  await doctorRepository.save({
    ...doctorSelected,
    prontuario: [chartSelected]
  })

  const updatedChar = await chartRepository.findOne({where:{
    id
  }})

  if(!updatedChar){
    throw new AppError("Not found", 404)
  }

  return updatedChar
}
