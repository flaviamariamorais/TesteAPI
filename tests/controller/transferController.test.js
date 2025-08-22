
//Bibliotecas
const request = require('supertest');
const sinon = require('sinon');
const { expect } = require('chai');

//Aplicação
const app = require('../../app');
const { json } = require('express');

//Mock
const transferService = require('../../service/transferService');

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

        it('usando mocks: Esta API permite o registro, login, consulta de usuario e transferencia, codigo 400', async () => {
            // Moca apenas a função transfer do Service
            const stub = sinon.stub(transferService, 'transfer');
            stub.throws(new Error('Usuário remetente ou destinatário não encontrado'));

            const resposta = await request(app)
                .post('/transfer')
                .send({
                    from: "Flavia",
                    to: "Ricardo",
                    amount: 100
                });

            expect(resposta.status).to.equal(400);
            expect(resposta.body).to.have.property('error', 'Usuário remetente ou destinatário não encontrado');

            // Reseta o mock
            stub.restore();
        });
    });  

    describe('GET /transfers', () => {
        //its ficam aqui
    });
});    