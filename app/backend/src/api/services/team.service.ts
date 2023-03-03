import { ModelStatic } from 'sequelize';
import Team from '../../database/models/Team';
import IResponse from '../interfaces/IResponse';
import { generateResponse } from '../../utils/generateResponse';

class TeamService {
  private model: ModelStatic<Team> = Team;

  async getAll(): Promise<IResponse> {
    const allTeams = await this.model.findAll();
    return generateResponse(200, allTeams);
  }

  async getById(id: number): Promise<IResponse> {
    const teamById = await this.model.findByPk(id);
    return generateResponse(200, teamById);
  }
}

export default TeamService;
