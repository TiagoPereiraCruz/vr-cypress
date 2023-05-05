const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps');

Given('que eu estou no site da VR', () => {
  cy.visit('https://www.vr.com.br')
});

When('eu clico na seção {string}', (secao) => {
  cy.contains(secao).click()
});

When('eu clico no botão {string}', (botao) => {
  cy.contains(botao).click()
});

Then('o mapa do Google deve ser exibido em tela', () => {
  cy.get('#map').should('be.visible')
});
