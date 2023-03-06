import { ModelStatic } from 'sequelize';
import IResponse from '../interfaces/IResponse';
import Matche from '../../database/models/Matche';
import Team from '../../database/models/Team';
import { generateResponse, generateResponseError } from '../../utils/generateResponse';
import IMatcheUpdate from '../interfaces/IMatcheUpdate';
import IMatche from '../interfaces/IMatche';

class MatcheService {
  private model: ModelStatic<Matche> = Matche;

  async getMatche(mactheInProgress: string): Promise<IResponse> {
    const allMatches = await this.model.findAll({
      include: [
        { model: Team, as: 'homeTeam', attributes: ['teamName'] },
        { model: Team, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });

    // sem nenhum filtro
    if (!mactheInProgress) return generateResponse(200, allMatches);

    // filtro de inProgress
    const ProgressisTrue = mactheInProgress === 'true';
    if (ProgressisTrue) return generateResponse(200, allMatches.filter((e) => e.inProgress));

    const progressIsFalse = mactheInProgress === 'false';
    if (progressIsFalse) return generateResponse(200, allMatches.filter((e) => !e.inProgress));

    return generateResponse(200, allMatches);
  }

  async finishMatche(id: number): Promise<IResponse> {
    await this.model.update({ inProgress: false }, { where: { id } });
    return generateResponse(200, { message: 'Finished' });
  }

  async updateMatche(id: number, body: IMatcheUpdate): Promise<IResponse> {
    const matcheId = await this.model.findByPk(id);
    if (matcheId?.inProgress) {
      await this.model.update({ ...body }, { where: { id } });
    }
    return generateResponse(200, { message: 'updated' });
  }

  async createMatche(body: IMatche): Promise<IResponse> {
    if (body.awayTeamId === body.homeTeamId) {
      return generateResponseError(
        422,
        'It is not possible to create a match with two equal teams',
      );
    }

    const homeTeam = await this.model.findByPk(body.homeTeamId);
    const awayTeam = await this.model.findByPk(body.awayTeamId);
    if (!homeTeam || !awayTeam) return generateResponseError(404, 'There is no team with such id!');

    const matchCreated = await this.model.create({ ...body });
    return generateResponse(201, matchCreated);
  }
}

export default MatcheService;
