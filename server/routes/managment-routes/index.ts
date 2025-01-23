import { Router } from "express";
import asyncWrapper from "../../utils/api-utils/async-wrapper";
import { createOrgnization } from "../../controllers/orgnization-controllers";
import handleAdminAuth from "../../middlewares/auth/admin-auth-middlware";

const organizationRoutes = Router();

organizationRoutes.route("/create")
    .post(handleAdminAuth , asyncWrapper(createOrgnization))

export default organizationRoutes;