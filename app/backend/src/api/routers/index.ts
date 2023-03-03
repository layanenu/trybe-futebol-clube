import { IRouter, Router } from 'express';
import teamRouters from './team.router';
import userRoutes from './user.router';

const router: IRouter = Router();
router.use(teamRouters);
router.use(userRoutes);

export default router;
