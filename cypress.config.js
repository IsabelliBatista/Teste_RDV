const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    env: {
      urlBase: 'https://portalrdvqa.azurewebsites.net/Account/Login?ReturnUrl=%2F',
      tenancyname: 'SUPERA',
      usuario: '94781273220',
      passwordLogin: '123qwe'
    }
  },
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/output.xml',
    toConsole: 'false'
  }
});