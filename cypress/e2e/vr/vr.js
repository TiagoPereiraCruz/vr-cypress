import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('que eu estou no site da VR', () => {
  // Define o pré-requisito do cenário - visitar o site da VR
  cy.visit('https://www.vr.com.br')
});

When('eu clico na seção {string}', (secao) => {
  // Define a ação do usuário - clicar na seção especificada
  cy.contains(secao).click({force: true}) // force: true é usado para garantir que o elemento seja clicado mesmo se estiver oculto ou desabilitado
});

When('eu clico no botão {string}', (botao) => {
  // Define a ação do usuário - clicar no botão especificado
  cy.contains(botao).click()
});

Then('o mapa do Google deve ser exibido em tela', () => {
  // Define a expectativa do cenário - o mapa do Google deve ser exibido em tela
  cy.get('#map').should('be.visible') // Verifica se o elemento com ID "map" é visível
});
