import { Router } from "express";
import asyncWrapper from "../../utils/api-utils/async-wrapper";
import { handleCreateTeam } from "../../controllers/team-controllers";
import handleAdminAuth from "../../middlewares/auth/admin-auth-middlware";

const teamRoutes = Router()

teamRoutes.route("/create-team")
    .post(handleAdminAuth, asyncWrapper(handleCreateTeam))

    
export default teamRoutes;