import { Request, Response } from 'express';
import ITeamService from '../interfaces/ITeamService';

class TeamController {
  private _service: ITeamService;

  constructor(service: ITeamService) {
    this._service = service;
  }

  public async readAll(req: Request, res: Response): Promise<Response | void> {
    const response = await this._service.readAll();
    res.status(200).json(response);
  }

  public async readOne(req: Request, res: Response): Promise<Response | void> {
    const response = await this._service.readOne(Number(req.params.id));
    res.status(200).json(response);
  }
}

export default TeamController;
