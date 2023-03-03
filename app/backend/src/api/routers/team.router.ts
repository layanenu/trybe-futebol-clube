import { IRouter, Router } from 'express';
import { TeamController } from '../controllers';

const teamRouter: IRouter = Router();
const teamController = new TeamController();

teamRouter.get('/teams', teamController.getAll.bind(teamController));
teamRouter.get('/teams/:id', teamController.getById.bind(teamController));

export default teamRouter;
