/// <reference types="cypress" />

describe('Funcionalidade: Detalhes da conta', () => {
    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.fixture('perfil').then(login => { // <= Puxar o usuario e senha de outro arquivo
            cy.login(login.usuario, login.senha)
        })
    });

    it('Deve completar detalhes da conta com sucesso', () => {
        cy.detalhesConta('Rafael', 'Morais', 'Rafael.Teste')
        cy.get('.woocommerce-message').should('contain', 'com sucesso.')
    });
});