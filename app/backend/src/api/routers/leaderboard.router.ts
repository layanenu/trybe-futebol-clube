import { IRouter, Router } from 'express';
import LeaderboardController from '../controllers/leaderboard.controller';

const leaderboardRoutes: IRouter = Router();
const leaderboardController = new LeaderboardController();

leaderboardRoutes.get('/leaderboard/home', leaderboardController
  .homeTeamPerformance.bind(leaderboardController));

leaderboardRoutes.get('/leaderboard/away', leaderboardController
  .awayTeamPerformance.bind(leaderboardController));

leaderboardRoutes.get('/leaderboard', leaderboardController
  .rank.bind(leaderboardController));

export default leaderboardRoutes;
