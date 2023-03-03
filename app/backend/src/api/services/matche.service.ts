import { ModelStatic } from 'sequelize';
import IResponse from '../interfaces/IResponse';
import Matche from '../../database/models/Matche';
import Team from '../../database/models/Team';
import { generateResponse } from '../../utils/generateResponse';

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

    return generateResponse(200, allMatches);
  }
}

export default MatcheService;
