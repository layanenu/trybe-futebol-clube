import { ModelStatic } from 'sequelize';
import ITeamService from '../interfaces/ITeamService';
import Team from '../../database/models/Team';

class TeamService implements ITeamService {
  protected model: ModelStatic <Team> = Team;
  public async readAll(): Promise<Team[]> {
    const response = await this.model.findAll();
    return response;
  }

  public async readOne(id: number): Promise<Team | null> {
    const response = await this.model.findByPk(id);
    return response;
  }
}
export default TeamService;
