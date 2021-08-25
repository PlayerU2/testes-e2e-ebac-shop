/// <reference types="cypress" />
import EnderecoPage from '../support/page_objects/endereco.page'

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
        beforeEach(() => {
            cy.visit('minha-conta')
            cy.fixture('perfil').then(dados => {
                cy.login(dados.usuario, dados.senha)
            })
    
        });
    
        it('Deve adicionar produtos ao carrinho - Usando comando customizado', () => {
            cy.visit('produtos')
            cy.addProdutos('Aero Daily Fitness Tee', 'M', 'Black', 4)

        });
    
        it('Deve realizar o checkout com sucesso - Usando arquivo de dados', 'Deve validar a compra com sucesso', () => {
            cy.visit('checkout')
            EnderecoPage.editarEnderecoCheckout('Yuki', 'Salazar', 'RC Studio', 'Brasil', 'Rua Solimão', '124', 'Praia Grande', 'São Paulo', '11721060', '11989899988', 'aleksalazar@outlook.com.br')
            cy.get('#terms').click()
            cy.get('#place_order').click()
            cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
        });
});
