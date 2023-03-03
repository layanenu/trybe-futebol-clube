import { Request, Response, NextFunction } from 'express';
import { TeamService } from '../services';

class TeamController {
  private service: TeamService = new TeamService();

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const { status, message } = await this.service.getAll();
      res.status(status).json(message);
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { status, message } = await this.service.getById(+id);
      res.status(status).json(message);
    } catch (error) {
      next(error);
    }
  }
}

export default TeamController;
