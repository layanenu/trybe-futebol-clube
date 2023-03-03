import { IRouter, Router } from 'express';
import teamRouters from './team.router';
import userRoutes from './user.router';
import matcheRoutes from './match.router';

const router: IRouter = Router();
router.use(teamRouters);
router.use(userRoutes);
router.use(matcheRoutes);

export default router;
