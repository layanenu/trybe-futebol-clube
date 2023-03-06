import { IRouter, Router } from 'express';
import { MatcheController } from '../controllers';
import tokenVerify from '../../middlewares/tokenVerify';

const matcheRoutes: IRouter = Router();
const matcheController = new MatcheController();

matcheRoutes.get('/matches', matcheController.getMatche.bind(matcheController));

matcheRoutes.post('/matches', tokenVerify, matcheController
  .createMatche.bind(matcheController));

matcheRoutes.patch('/matches/:id/finish', tokenVerify, matcheController
  .finishMatche.bind(matcheController));

matcheRoutes.patch('/matches/:id', tokenVerify, matcheController
  .updateMatche.bind(matcheController));

export default matcheRoutes;
