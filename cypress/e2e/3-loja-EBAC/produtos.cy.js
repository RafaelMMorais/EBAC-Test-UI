///<reference types="cypress" />

describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
            .first() // <-- Primeiro da lista
            //.last() <-- Ultimo da lista
            //.eq(2) <-- Pegar um membro especifico da lista (lembrar q 0 é o primeiro)
            //.contains('Frankie Sweatshirt') <-- Pegar um produto especifico pelo nome
            .click()

            cy.get('#tab-title-description > a').should('contain' , 'Descrição')
    });
});