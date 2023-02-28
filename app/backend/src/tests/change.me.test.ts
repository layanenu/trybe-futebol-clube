import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Team from '../database/models/Team';
import { Model } from 'sequelize';

chai.use(chaiHttp);

const { expect } = chai;

describe('Usando o método GET em /teams', () => {
  /**
   * Exemplo do uso de stubs com tipos
   */

  // let chaiHttpResponse: Response;

  // before(async () => {
  //   sinon
  //     .stub(Example, "findOne")
  //     .resolves({
  //       ...<Seu mock>
  //     } as Example);
  // });

  // after(()=>{
  //   (Example.findOne as sinon.SinonStub).restore();
  // })

  // it('...', async () => {
  //   chaiHttpResponse = await chai
  //      .request(app)
  //      ...

  //   expect(...)
  // });

  afterEach(function () {
    sinon.restore();
  });

  it('Retorna todos os times corretamente', async () => {

    const mockTeams = [
      { id: 1, teamName: 'Avaí/Kindermann' } as Team,
      { id: 2, teamName: 'Bahia' } as Team,
      { id: 3, teamName: 'Botafogo' } as Team,
    ]

    // Action
    const response = await chai.request(app).get('teams');
    // Assertions
    expect(response.status).to.be.deep.equal(200);
    expect(response.body.teams).to.deep.equal(mockTeams);
  });
});

