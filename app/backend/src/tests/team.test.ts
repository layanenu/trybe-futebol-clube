import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Team from '../database/models/Team';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando a rota /teams', () => {

  afterEach(function() {
    sinon.restore();
  });

  const mockTeams = [
    { id: 1, teamName: 'Avaí/Kindermann' } as Team,
    { id: 2, teamName: 'Bahia' } as Team,
    { id: 3, teamName: 'Botafogo' } as Team,
  ]

  const mockTeam = [
    { id: 1, teamName: 'Avaí/Kindermann' } as Team,
  ]

  it('Retorna todos os times corretamente', async () => {
    const response = await chai.request(app).get('/teams');
    expect(response.status).to.be.deep.equal(200);
  });

  it('Busca pelo id através de /teams:id', async () => {
    const response = await chai.request(app).get('/teams:1');
    expect(response.status).to.be.deep.equal(200);
  });
  
});