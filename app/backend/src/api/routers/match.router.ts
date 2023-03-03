import { IRouter, Router } from 'express';
import { MatcheController } from '../controllers';

const matcheRoutes: IRouter = Router();
const matcheController = new MatcheController();

matcheRoutes.get('/matches', matcheController.getMatche.bind(matcheController));

export default matcheRoutes;
