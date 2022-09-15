import AppDataSource from "../../data-source"
import { Consulta } from "../../entities/consulta.entity"
import { Medico } from "../../entities/medico.entity"
import { Prontuario } from "../../entities/prontuario.entity"
import { AppError } from "../../errors/AppError"


export const chartInsertApointmentService = async (apointmentId : string, id : string) => {
  const chartRepository = AppDataSource.getRepository(Prontuario)
  const apointmentRepository = AppDataSource.getRepository(Consulta)
  
  const chartSelected = await chartRepository.findOne({where:{
    id
  },
  relations:{
    consultas: true
  }
  })
  
  const apontimentSelected = await apointmentRepository.findOne({where:{
    id: apointmentId
  }})

  console.log(apontimentSelected)
  
  if(!chartSelected){
    throw new AppError("Chart not found!", 404)
  }

  await apointmentRepository.save({
    ...apontimentSelected,
    prontuario:chartSelected
  })

  const updatedChar = await chartRepository.findOne({where:{
    id
  }})

  console.log(updatedChar)

  if(!updatedChar){
    throw new AppError("Not found", 404)
  }

  return updatedChar
}