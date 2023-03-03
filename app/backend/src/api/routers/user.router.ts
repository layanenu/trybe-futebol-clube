import { IRouter, Router } from 'express';
import { UserController } from '../controllers';
import loginVerify from '../../middlewares/loginVerify';
import tokenVerify from '../../middlewares/tokenVerify';

const userRouter: IRouter = Router();
const userController = new UserController();

userRouter.post('/login', loginVerify, userController.login.bind(userController));
userRouter.get('/login/role', tokenVerify, UserController.role);

export default userRouter;
