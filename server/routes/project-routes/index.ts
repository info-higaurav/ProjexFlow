import { Router } from "express";
import asyncWrapper from "../../utils/api-utils/async-wrapper";
import { handleCreteProject } from "../../controllers/project-controllers";
import handleAdminAuth from "../../middlewares/auth/admin-auth-middlware";

const projectRoute = Router()

projectRoute.route("/create-projects")
    .post(handleAdminAuth, asyncWrapper(handleCreteProject))
export default projectRoute