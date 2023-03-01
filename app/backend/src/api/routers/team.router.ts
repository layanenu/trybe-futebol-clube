import { Router, Request, Response } from 'express';
import TeamController from '../controllers';
import TeamService from '../services';

const teamsRouter = Router();

const teamService = new TeamService();
const teamController = new TeamController(teamService);

teamsRouter.get('/', (req: Request, res: Response) => teamController.readAll(req, res));
teamsRouter.get('/:id', (req: Request, res: Response) => teamController.readOne(req, res));

export default teamsRouter;
