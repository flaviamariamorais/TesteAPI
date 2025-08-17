
//Bibliotecas
const request = require('supertest');
const { expect } = require('chai');

//Aplicação
const app = require('../../app');
const { json } = require('express');

//Testes
describe('Transfer Controller', () => {
    describe('POST /transfer', () => {
        it('Esta API permite o registro, login, consulta de usuario e transferencia, codigo 400', async () => {
            const resposta = await request(app)
                .post('/transfer')
                .send({
                    from: "Flavia",
                    to: "Ricardo",
                    amount: 100
            });

            expect(resposta.status).to.equal(400);
            expect(resposta.body).to.have.property('error', 'Usuário remetente ou destinatário não encontrado')
        });
    });  

    describe('GET /transfers', () => {
        //its ficam aqui
    });
});    