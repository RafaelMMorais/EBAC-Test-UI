///<reference types="cypress" />

describe('Funcionalidade: Login', () => { 
    it ('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/') //<= cy.visit para visitar um url
        cy.get('#username').type('rafaelmmorais.teste@teste.com.br') // <= escrevendo o login na textbox username
        cy.get('#password').type('teste@123') // <= escrevendo a senha na textbox password
        cy.get('.woocommerce-form > .button').click() // <= Clicando no botão de login
        
        //Pegando um elemento da pagina "Minha conta" para validar o teste
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, rafaelmmorais.teste')
    })
})