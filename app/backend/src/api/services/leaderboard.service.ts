import { ModelStatic } from 'sequelize';
import IResponse from '../interfaces/IResponse';
import Matche from '../../database/models/Matche';
import Team from '../../database/models/Team';
import { generateResponse } from '../../utils/generateResponse';
import ILeaderboard from '../interfaces/Ileaderboard';
import { rank, grResults, orderRank } from '../../utils/functionsLeaderboard';

class LeaderboardService {
  private matche: ModelStatic<Matche> = Matche;
  private team: ModelStatic<Team> = Team;

  async homeTeamPerformance(): Promise<IResponse> {
    const allTeams = await this.team.findAll();
    const allMatches = await this.matche.findAll({ where: { inProgress: false } });

    const result: ILeaderboard[] = [];

    allTeams.forEach((elem) => {
      const teamMatchers = allMatches.filter((e) => e.homeTeamId === elem.id);
      const results = grResults(teamMatchers, [
        'homeTeamGoals',
        'awayTeamGoals',
      ]);

      result.push(
        rank(elem, results, teamMatchers, ['homeTeamGoals', 'awayTeamGoals']),
      );
    });

    return generateResponse(200, orderRank(result));
  }
}

export default LeaderboardService;
