import { Request, Response } from "express";
import { examsLabListService } from "../../services/examesLaboratoriais/examsLabList.service";

export const examsLabListController = async (req: Request, res: Response) => {
  const examsLab = await examsLabListService();
  return res.json(examsLab);
};
