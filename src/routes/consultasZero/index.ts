import { Router } from "express";
import { appointmentZeroCreateController } from "../../controllers/consultasZero/consultaZeroCreate.controller";
import { appointmentZeroListController } from "../../controllers/consultasZero/consultaZeroList.controller";
import { appointmentZeroListIdController } from "../../controllers/consultasZero/consultaZeroListId.controller";
import { appointmentZeroUpdatedController } from "../../controllers/consultasZero/consultaZeroUpdated.controller";
import { authTokenMiddleware } from "../../middlewares/authToken.middleware";
import { isAdmMiddleware } from "../../middlewares/isAdm.middleware";

import { apointmentZeroDeleteController } from "../../controllers/consultasZero/consultaZeroDelete.controller";

const appointmentZero = Router();

export const appointmentZeroRoutes = () => {
  appointmentZero.post(
    "/register",
    authTokenMiddleware,
    appointmentZeroCreateController
  );
  appointmentZero.get(
    "/:id",
    authTokenMiddleware,
    appointmentZeroListIdController
  );
  appointmentZero.get("", authTokenMiddleware, appointmentZeroListController);
  appointmentZero.patch(
    "/:id",
    authTokenMiddleware,
    isAdmMiddleware,
    appointmentZeroUpdatedController
  );

  appointmentZero.delete("/:id", apointmentZeroDeleteController);

  return appointmentZero;
};
