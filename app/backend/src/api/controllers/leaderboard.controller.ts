import { Request, Response, NextFunction } from 'express';
import { LeaderboardService } from '../services/index';

class LeaderboardController {
  private service: LeaderboardService = new LeaderboardService();

  async homeTeamPerformance(_req: Request, res: Response, next: NextFunction) {
    try {
      const { status, message } = await this.service.homeTeamPerformance();
      res.status(status).json(message);
    } catch (error) {
      next(error);
    }
  }
}

export default LeaderboardController;
