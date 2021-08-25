/// <reference types="cypress" />
import EnderecoPage from '../support/page_objects/endereco.page'

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
        beforeEach(() => {
            cy.visit('minha-conta')
            cy.fixture('perfil').then(dados => {
                cy.login(dados.usuario, dados.senha)
            })
    
        });
    
        it('Deve realizar todos os processos End-to-end - Usando comandos customizados', () => {
            cy.get('#primary-menu > .menu-item-629 > a').click()
            cy.addProdutos('Aero Daily Fitness Tee', 'M', 'Black', 4)
            cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
            cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
            EnderecoPage.editarEnderecoCheckout('Yuki', 'Salazar', 'RC Studio', 'Brasil', 'Rua Solimão', '124', 'Praia Grande', 'São Paulo', '11721060', '11989899988', 'aleksalazar@outlook.com.br')
            cy.get('#terms').click()
            cy.get('#place_order').click()
            cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
        });

});
