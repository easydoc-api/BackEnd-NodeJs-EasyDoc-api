import { Router } from "express";

import apointmentListController from "../../controllers/consultas/apointmentList.controller";

import appointmentCreateController from "../../controllers/consultas/apointmentCreate.controller";

import { authTokenMiddleware } from "../../middlewares/authToken.middleware";
import { isAdmMiddleware } from "../../middlewares/isAdm.middleware";
import apointmentListOneController from "../../controllers/consultas/apointmentListOne.controller";

const appointment = Router();

export const appointmentRoutes = () => {
  appointment.post(
    "/register",
    authTokenMiddleware,
    appointmentCreateController
  );

  appointment.get("/paciente/:id", authTokenMiddleware, apointmentListOneController);

  appointment.get(
    "",
    authTokenMiddleware,
    isAdmMiddleware,
    apointmentListController
  );

  appointment.delete("/:id");

  return appointment;
};
