import {Router} from 'express'
import asyncWrapper from '../../utils/api-utils/async-wrapper';
import { handleSignIn, handlleSignUp, routeHealth } from '../../controllers/user-controllers';

const userRoutes = Router()

userRoutes.route("/health")
    .get(asyncWrapper(routeHealth))

userRoutes.route("/signup")
    .post(asyncWrapper(handlleSignUp))

userRoutes.route("/signin")
    .post(asyncWrapper(handleSignIn))

userRoutes.route("/create-users")
    .post(asyncWrapper(handlleSignUp))

    export default userRoutes;
