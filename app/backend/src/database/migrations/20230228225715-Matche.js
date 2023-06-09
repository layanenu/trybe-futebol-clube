'use strict';

module.exports = {
 async up (queryInterface, Sequelize) {
   await queryInterface.createTable('matches', {
     id: {
       allowNull: false,
       autoIncrement: true,
       primaryKey: true,
       type: Sequelize.INTEGER
     },
     // foreign key
     homeTeamId: {
       allowNull: false,
       type: Sequelize.INTEGER,
       field: 'home_team_id',
       references: {
        model: 'teams',
        key: 'id',
       },
       onDelete: 'CASCADE',
       onUpdate: 'CASCADE'
     },
     homeTeamGoals: {
       allowNull: false,
       type: Sequelize.INTEGER,
       field: 'home_team_goals'
     },
     // foreign key
     awayTeamId: {
       allowNull: false,
       type: Sequelize.INTEGER,
       field: 'away_team_id',
       references: {
        model: 'teams',
        key: 'id',
       },
       onDelete: 'CASCADE',
       onUpdate: 'CASCADE'
     },
     awayTeamGoals: {
       allowNull: false,
       type: Sequelize.INTEGER,
       field: 'away_team_goals'
     },
     inProgress: {
       allowNull: false,
       type: Sequelize.BOOLEAN,
       field: 'in_progress'
     }
   });
 },

 async down (queryInterface, _) {
    await queryInterface.dropTable('matches');
 }
};