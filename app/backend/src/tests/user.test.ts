import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando a rota /login', () => {

  afterEach(function(){
    sinon.restore();
  })

  const mockEmailVazio = {
    "email": "",
    "password": "password@123"
  }

  const mockPasswordVazio = {
    "email": "admin@admin.com",
    "password": ""
  }

  const mockEmailInvalido = {
    "email": "trybe@trybe",
    "password": "password@123"
  }

  const mockPasswordInvalido = {
    "email": "trybe@trybe.com",
    "password": "pass"
  }

  const mockUserInvalido = {
    "email": "trybe@trybe.com",
    "password": "password@123"
  }

  const mockUserValido = {
    "email": "admin@admin.com",
    "password": "secret_admin"
  }

  it('Retorna 400 se email vazio', async () => {
    // Action
    const response = await chai.request(app).post('/login').send(mockEmailVazio)
    expect(response.status).to.be.deep.equal(400);
  })

  it('Retorna 400 se password vazio', async () => {
    const response = await chai.request(app).post('/login').send(mockPasswordVazio)
    expect(response.status).to.be.deep.equal(400);
  })

  it('Retorna 401 se email inválido', async () => {
    const response = await chai.request(app).post('/login').send(mockEmailInvalido)
    expect(response.status).to.be.deep.equal(401);
  })

  it('Retorna 401 se password inválido', async () => {
    const response = await chai.request(app).post('/login').send(mockPasswordInvalido)
    expect(response.status).to.be.deep.equal(401);
  })
  
  it('Retorna 401 se usuário inválido', async () => {
    const response = await chai.request(app).post('/login').send(mockUserInvalido)
    expect(response.status).to.be.deep.equal(401);
  });

  it('Retorna 200 se usuário válido', async () => {
    const response = await chai.request(app).post('/login').send(mockUserValido)
    expect(response.status).to.be.deep.equal(200);
  })
});