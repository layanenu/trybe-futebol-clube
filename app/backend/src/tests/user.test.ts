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

  // EMAIL VAZIO
  it('Retorna 400 se email vazio', async () => {
    //Action 
    const response = await chai.request(app).post('/login').send(mockEmailVazio)
    //Assertions
    expect(response.status).to.be.deep.equal(400);
  })

  // SENHA VAZIA
  it('Retorna 400 se password vazio', async () => {
    //Action 
    const response = await chai.request(app).post('/login').send(mockPasswordVazio)
    //Assertions
    expect(response.status).to.be.deep.equal(400);
  })

  // EMAIL INVALIDO
  it('Retorna 401 se email inválido', async () => {
    //Action 
    const response = await chai.request(app).post('/login').send(mockEmailInvalido)
    //Assertions
    expect(response.status).to.be.deep.equal(401);
  })

  // SENHA INVALIDA
  it('Retorna 401 se password inválido', async () => {
    //Action 
    const response = await chai.request(app).post('/login').send(mockPasswordInvalido)
    //Assertions
    expect(response.status).to.be.deep.equal(401);
  })
  
  // USER INVALIDO
  it('Retorna 401 se usuário inválido', async () => {
    //Action
    const response = await chai.request(app).post('/login').send(mockUserInvalido)
    //Assertions
    expect(response.status).to.be.deep.equal(401);
  });

  // USER VALIDO
  it('Retorna 200 se usuário válido', async () => {
    //Action 
    const response = await chai.request(app).post('/login').send(mockUserValido)
    //Assertions
    expect(response.status).to.be.deep.equal(200);
  })
});