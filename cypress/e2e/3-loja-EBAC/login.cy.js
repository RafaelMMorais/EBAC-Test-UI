///<reference types="cypress" />

describe('Funcionalidade: Login', () => { // Cenario

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/') //<= cy.visit para visitar um url
    });

    afterEach(() => {
        cy.screenshot()
    })

    it ('Deve fazer login com sucesso', () => {
        cy.get('#username').type('rafaelmmorais.teste@teste.com.br') // <= escrevendo o login na textbox username
        cy.get('#password').type('teste@123') // <= escrevendo a senha na textbox password
        cy.get('.woocommerce-form > .button').click() // <= Clicando no botão de login
        
        //Pegando um elemento da pagina "Minha conta" para validar o teste
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, rafaelmmorais.teste')
    })

    it('Deve ixibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('rafaelmoraisteste@teste.com.br') // <= escrevendo o login na textbox username
        cy.get('#password').type('teste@123') // <= escrevendo a senha na textbox password
        cy.get('.woocommerce-form > .button').click() // <= Clicando no botão de login
        
        //Pegando um elemento da pagina de login para validar o teste
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('rafaelmmorais.teste@teste.com.br') // <= escrevendo o login na textbox username
        cy.get('#password').type('teste123') // <= escrevendo a senha na textbox password
        cy.get('.woocommerce-form > .button').click() // <= Clicando no botão de login
        
        //Pegando um elemento da pagina de login para validar o teste
        cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail rafaelmmorais.teste@teste.com.br está incorreta. Perdeu a senha?')
    });
})