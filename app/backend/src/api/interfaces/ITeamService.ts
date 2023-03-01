import Team from '../../database/models/Team';

export default interface ITeamService {
  readAll(): Promise <Team[]>
  readOne(id: number): Promise<Team | null>
}
