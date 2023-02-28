import { Model, STRING, INTEGER } from 'sequelize';
import db from '.';

class Team extends Model {
  declare readonly id: number;
  declare teamName: string;
}

Team.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  teamName: {
    allowNull: false,
    type: STRING,
    field: 'team_name',
  },
}, {
  sequelize: db,
  underscored: true,
  timestamps: false,
  modelName: 'teams',
  tableName: 'teams',
});

export default Team;
