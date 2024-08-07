///<reference types="cypress" />
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
        produtosPage.visitarUrl()
        //cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        /*cy.get('.product-block')
            .first() // <-- Primeiro da lista
            //.last() <-- Ultimo da lista
            //.eq(2) <-- Pegar um membro especifico da lista (lembrar q 0 é o primeiro)
            //.contains('Frankie Sweatshirt') <-- Pegar um produto especifico pelo nome
            .click()*/
        produtosPage.buscarProdutoLista('Aero Daily Fitness Tee')
        cy.get('#tab-title-description > a').should('contain' , 'Descrição')
    });

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Ajax Full-Zip Sweatshirt'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve visitar a pagina do produto', () => {
        produtosPage.visitarProduto('Zeppelin Yoga Pant')
        cy.get('.product_title').should('contain', 'Zeppelin Yoga Pant')
    });

    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 7
        produtosPage.buscarProduto('Bruno Compete Hoodie')
        produtosPage.addProdutoCarrinho('M', 'Blue', qtd)

        cy.get('.woocommerce-message').should('contain', qtd + ' × “Bruno Compete Hoodie” foram adicionados no seu carrinho.')
    });
    
    it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            let prod = 3
            produtosPage.buscarProduto(dados[prod].nomeProduto)
            produtosPage.addProdutoCarrinho(dados[prod].tamanho, 
                dados[prod].cor, 
                dados[prod].quantidade)

            cy.get('.woocommerce-message').should('contain', dados[prod].nomeProduto)
        })
    });
});