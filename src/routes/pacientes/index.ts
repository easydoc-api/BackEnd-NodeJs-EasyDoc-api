import { Router } from "express";
import { schemaValidationMiddleware } from "../../middlewares/schemaValidation.middleware";
import { newPatientSchema } from "../../schemas/newPatient.schema";
import { patientCreateController } from "../../controllers/pacientes/createPatient.controller";
import { patientDeleteController } from "../../controllers/pacientes/deletePatient.controller";
import { patientListOneController } from "../../controllers/pacientes/listPatient.controller";
import { patientListController } from "../../controllers/pacientes/patientList.controller";
import { patientUpdateController } from "../../controllers/pacientes/updatePatient.controller";
import { isAdmMiddleware } from "../../middlewares/isAdm.middleware";
import { authTokenMiddleware } from "../../middlewares/authToken.middleware";

const patient = Router();

export const patientRoutes = () => {
  patient.post(
    "/register",
    schemaValidationMiddleware(newPatientSchema),
    authTokenMiddleware,
    isAdmMiddleware,
    patientCreateController
  );
  patient.get("", authTokenMiddleware, isAdmMiddleware, patientListController);
  patient.get("/:id", authTokenMiddleware, patientListOneController);
  patient.patch("/:id", authTokenMiddleware, patientUpdateController);
  patient.delete(
    "/:id",
    authTokenMiddleware,
    isAdmMiddleware,
    patientDeleteController
  );
  
  return patient;
};
//