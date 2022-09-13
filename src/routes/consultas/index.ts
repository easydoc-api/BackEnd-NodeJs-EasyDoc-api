import { Router } from "express";

import {apointmentListController} from "../../controllers/consultas/apointmentList.controller";

import {appointmentCreateController} from "../../controllers/consultas/apointmentCreate.controller";

import { authTokenMiddleware } from "../../middlewares/authToken.middleware";
import { isAdmMiddleware } from "../../middlewares/isAdm.middleware";
import {apointmentListOneController} from "../../controllers/consultas/apointmentListOne.controller";
import {apointmentDeleteController} from "../../controllers/consultas/apointmentDelete.controller";

const appointment = Router();

export const appointmentRoutes = () => {
  appointment.post(
    "/register",
    authTokenMiddleware,
    appointmentCreateController
  );
  
  appointment.get(
    "",
    authTokenMiddleware,
    isAdmMiddleware,
    apointmentListController
  );
  
  appointment.get("/paciente/:id", authTokenMiddleware, apointmentListOneController);

  appointment.delete("/:id", authTokenMiddleware, isAdmMiddleware, apointmentDeleteController);

  return appointment;
};
