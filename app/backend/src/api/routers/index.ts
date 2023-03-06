import { IRouter, Router } from 'express';
import teamRouters from './team.router';
import userRoutes from './user.router';
import matcheRoutes from './match.router';
import leaderboardRoutes from './leaderboard.router';

const router: IRouter = Router();
router.use(teamRouters);
router.use(userRoutes);
router.use(matcheRoutes);
router.use(leaderboardRoutes);

export default router;
