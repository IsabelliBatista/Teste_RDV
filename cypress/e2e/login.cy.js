/// <reference types="cypress" />

const urlBase = Cypress.env('urlBase')
const tenancyname = Cypress.env('tenancyname')
const usuario = Cypress.env('usuario')
const passwordLogin = Cypress.env('passwordLogin')

describe('template spec', () => {

  beforeEach(() => {
    cy.visit(urlBase)
  })
  it('Login com sucesso', () => {
    cy.login(tenancyname, usuario, passwordLogin)
    cy.get('.btn').click()
   
    // valida a visibilidade do elemento na pagina inicial
    cy.wait(10000)
    cy.get('h1 > span').should('text', 'Dashboard')
  })
  it('Login sem sucesso', () => {
    cy.login("SUPER", "9478127000", passwordLogin)
    cy.get('.btn').click()

    cy.get('h2').should('be.visible')
    cy.get('.confirm').click()
  })
  it('Visualizar senha e lembrar senha', () => {
    cy.login(tenancyname, usuario, passwordLogin)
    cy.get('#eyeClose').click()
    cy.get('span > input').click()
    cy.get('#eyeOpen').click()
  })
  it('Esqueceu a senha', () => {
    cy.get('#forget-passwordlink').click()
    cy.get('.sweet-alert > p').should('be.visible')
    cy.get('.confirm').click()
  })
  it('Visualizar senha e lembrar senha', () => {
    cy.get('.famfamfam-flag-es').click()
    cy.get('#forget-passwordlink').should('text','Ha olvidado su contraseña?')
  })
})