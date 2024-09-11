Cypress.Commands.add('login', (tenancyname, usuario, passwordLogin) => {
    cy.get('#tenancyname').type(tenancyname)
    cy.get('#usuario').type(usuario)
    cy.get('#passwordLogin').type(passwordLogin)
  });
  