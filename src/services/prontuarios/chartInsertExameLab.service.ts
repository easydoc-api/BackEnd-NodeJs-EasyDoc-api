import AppDataSource from "../../data-source"
import { ExamesLaboratoriais } from "../../entities/examesLaboratoriais.entity"
import { Prontuario } from "../../entities/prontuario.entity"
import { AppError } from "../../errors/AppError"


export const chartInsertExameLabService = async (exameLabId : string, id : string) => {
  const chartRepository = AppDataSource.getRepository(Prontuario)
  const exameRepository = AppDataSource.getRepository(ExamesLaboratoriais)

  
  const chartSelected = await chartRepository.findOne({
    where:{
      id
    },
      relations:{
       examesLaboratoriais: true
    }
  })

  console.log(chartSelected)

  const exameSelected = await exameRepository.findOne({where:{
    id: exameLabId
  }})

  if(!chartSelected){
    throw new AppError("Chart not found!", 404)
  }

  await exameRepository.save({
    ...exameSelected,
    prontuario: chartSelected
  })

  const updatedChar = await chartRepository.findOne({where:{
    id
  }})

  if(!updatedChar){
    throw new AppError("Not found", 404)
  }

  return updatedChar
}
