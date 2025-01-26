import { Router } from "express";
import asyncWrapper from "../../utils/api-utils/async-wrapper";
import { handleCreateTask } from "../../controllers/task-controllers";
import handleAdminAuth from "../../middlewares/auth/admin-auth-middlware";

const taskRoutes = Router()

taskRoutes.route("/create-task")
    .post(handleAdminAuth,asyncWrapper(handleCreateTask))

export default taskRoutes;