import {Router} from 'express'
import asyncWrapper from '../../utils/api-utils/async-wrapper';
import { routeHealth } from '../../controllers/user-controllers';

const userRoutes = Router()

userRoutes.route("/health")
    .get(asyncWrapper(routeHealth))
export default userRoutes;