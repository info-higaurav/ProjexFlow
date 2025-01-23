import {Router} from 'express'
import asyncWrapper from '../../utils/api-utils/async-wrapper';
import { handlleSignUp, routeHealth } from '../../controllers/user-controllers';

const userRoutes = Router()

userRoutes.route("/health")
    .get(asyncWrapper(routeHealth))

userRoutes.route("/")
    .post(asyncWrapper(handlleSignUp))
export default userRoutes;