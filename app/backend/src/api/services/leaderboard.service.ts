import { ModelStatic } from 'sequelize';
import IResponse from '../interfaces/IResponse';
import Matche from '../../database/models/Matche';
import Team from '../../database/models/Team';
import { generateResponse } from '../../utils/generateResponse';
import ILeaderboard from '../interfaces/Ileaderboard';
import { rank, grResults, grResultsGeneral, orderRank, rankGeneral,
} from '../../utils/functionsLeaderboard';

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

  async awayTeamPerformance(): Promise<IResponse> {
    const teams = await this.team.findAll();
    const matches = await this.matche.findAll({ where: { inProgress: false } });

    const result: ILeaderboard[] = [];

    teams.forEach((e) => {
      const matchesByTeam = matches.filter((el) => el.awayTeamId === e.id);
      const results = grResults(matchesByTeam, [
        'awayTeamGoals',
        'homeTeamGoals',
      ]);

      result.push(
        rank(e, results, matchesByTeam, ['awayTeamGoals', 'homeTeamGoals']),
      );
    });

    return generateResponse(200, orderRank(result));
  }

  async rank(): Promise<IResponse> {
    const teams = await this.team.findAll();
    const matches = await this.matche.findAll({ where: { inProgress: false } });

    const result: ILeaderboard[] = [];

    teams.forEach((e) => {
      const matchesByTeam = matches.filter(
        (el) => el.awayTeamId === e.id || el.homeTeamId === e.id,
      );

      const results = grResultsGeneral(e.id, matchesByTeam);

      result.push(rankGeneral(e, results, matchesByTeam));
    });

    return generateResponse(200, orderRank(result));
  }
}

export default LeaderboardService;
