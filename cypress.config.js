// Importa o pacote 'cypress-cucumber-preprocessor'
const cucumber = require('cypress-cucumber-preprocessor').default

// Importa a função 'defineConfig' do pacote 'cypress'
const { defineConfig } = require("cypress");

// Exporta uma configuração do Cypress utilizando a função 'defineConfig'
module.exports = defineConfig({

  // Define a configuração de testes E2E
  e2e: {

    // Define um evento de setup para o Cypress que será executado antes dos testes
    setupNodeEvents(on, config) {

      // Define um pre-processador para arquivos com extensão .feature utilizando o pacote 'cypress-cucumber-preprocessor'
      on('file:preprocessor', cucumber())
    },

    // Define o padrão para os arquivos de especificação dos testes
    specPattern: 'cypress/e2e/*.feature',
  },
});
