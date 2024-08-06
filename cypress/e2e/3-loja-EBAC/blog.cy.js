///<reference types="cypress" />

describe('Funcionalidade: Blog', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/blog-grid/')
    });

    it('Deve selecionar uma noticia do blog', () => {
        cy.get(':nth-child(2) > .post-grid > .post > .entry-content > .entry-meta > .entry-title > a').click()

        cy.get('.entry-header > .entry-meta > .entry-title').should('contain' , 'Donec laoreet')
    });
    
});