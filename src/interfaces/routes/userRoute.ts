import {Router} from 'express';
import { userSignup } from "../controllers/user";


const userRoute = Router();

userRoute.post("/signup", userSignup);

export default userRoute ;