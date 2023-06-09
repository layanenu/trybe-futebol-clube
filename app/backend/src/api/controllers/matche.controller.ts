import { Request, Response, NextFunction } from 'express';
import MatcheService from '../services/matche.service';

class MatcheController {
  private service: MatcheService = new MatcheService();

  async getMatche(req: Request, res: Response, next: NextFunction) {
    try {
      const { inProgress } = req.query;
      const { status, message } = await this.service.getMatche(inProgress as string);
      res.status(status).json(message);
    } catch (error) {
      next(error);
    }
  }

  async finishMatche(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { status, message } = await this.service.finishMatche(+id);
      res.status(status).json(message);
    } catch (error) {
      next(error);
    }
  }

  async updateMatche(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { status, message } = await this.service.updateMatche(+id, req.body);
      res.status(status).json(message);
    } catch (error) {
      next(error);
    }
  }

  async createMatche(req: Request, res: Response, next: NextFunction) {
    try {
      const { status, message } = await this.service.createMatche(req.body);
      res.status(status).json(message);
    } catch (error) {
      next(error);
    }
  }
}

export default MatcheController;
