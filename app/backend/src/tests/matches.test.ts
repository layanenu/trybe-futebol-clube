import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { Model } from 'sequelize';

import { app } from '../app';
import Matche from '../database/models/Matche';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando a rota /teams', () => {
  beforeEach(sinon.restore);

  const mockMatch = [
    new Matche({
      id: 1,
      homeTeamId: 1,
      homeTeamGoals: 1,
      awayTeamId: 2,
      awayTeamGoals: 2,
      inProgress: true,
    }),
    new Matche({
      id: 2,
      homeTeamId: 3,
      homeTeamGoals: 4,
      awayTeamId: 5,
      awayTeamGoals: 2,
      inProgress: false,
    }),
  ];

  const mockMatchInProgressTrueOrFalse = [
    {
      id: 1,
      homeTeamId: 1,
      homeTeamGoals: 1,
      awayTeamId: 2,
      awayTeamGoals: 2,
      inProgress: true,
    },
    {
      id: 2,
      homeTeamId: 3,
      homeTeamGoals: 4,
      awayTeamId: 5,
      awayTeamGoals: 2,
      inProgress: false,
    },
  ];


  it('Retorna todos as matches corretamente', async () => {
    sinon.stub(Model, 'findAll').resolves(mockMatch);

    const result = await chai.request(app).get('/matches');
    expect(result.status).to.be.equal(200);
    expect(result.body).to.deep.equal(mockMatchInProgressTrueOrFalse);
  });

  it('Retorna todos as matches com inProgress true', async () => {
    sinon.stub(Model, 'findAll').resolves(mockMatch);

    const result = await chai.request(app).get('/matches?inProgress=true');
    expect(result.status).to.be.equal(200);
    expect(result.body).to.deep.equal([mockMatchInProgressTrueOrFalse[0]]);
  });

  it('Retorna todos as matches com inProgress false', async () => {
    sinon.stub(Model, 'findAll').resolves(mockMatch);

    const result = await chai.request(app).get('/matches?inProgress=false');
    expect(result.status).to.be.equal(200);
    expect(result.body).to.deep.equal([mockMatchInProgressTrueOrFalse[1]]);
  });
});