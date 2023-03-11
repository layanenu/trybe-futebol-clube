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

  async awayTeamPerformance(_req: Request, res: Response, next: NextFunction) {
    try {
      const { status, message } = await this.service.awayTeamPerformance();
      res.status(status).json(message);
    } catch (error) {
      next(error);
    }
  }

  async rank(_req: Request, res: Response, next: NextFunction) {
    try {
      const { status, message } = await this.service.rank();
      res.status(status).json(message);
    } catch (error) {
      next(error);
    }
  }
}

export default LeaderboardController;
