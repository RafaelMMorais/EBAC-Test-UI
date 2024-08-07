///<reference types="cypress" />
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => { // Cenario

    beforeEach(() => {
        cy.visit('minha-conta') //<= cy.visit para visitar um url
    });

    afterEach(() => {
        //cy.screenshot()
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

    //Usando massa de dados => Importar de outro arquivo os dados de login
    it('Deve fazer login com sucesso - usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario) // <= escrevendo o login na textbox username
        cy.get('#password').type(perfil.senha) // <= escrevendo a senha na textbox password
        cy.get('.woocommerce-form > .button').click() // <= Clicando no botão de login
        
        //Pegando um elemento da pagina "Minha conta" para validar o teste
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, rafaelmmorais.teste')
    });

    it.only('Deve fazer login com sucesso - usando fixture', () => {
        cy.fixture('perfil').then( dados => {
            cy.get('#username').type(dados.usuario, { log: false }) // <= escrevendo o login na textbox username
            cy.get('#password').type(dados.senha, { log: false }) // <= escrevendo a senha na textbox password
            cy.get('.woocommerce-form > .button').click() // <= Clicando no botão de login
        
            //Pegando um elemento da pagina "Minha conta" para validar o teste
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, rafaelmmorais.teste')
        });
    });
    
    it('Deve fazer login com sucesso - usando comandos customizados', () => {
        cy.login('rafaelmmorais.teste@teste.com.br', 'teste@123')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, rafaelmmorais.teste')
    });
})