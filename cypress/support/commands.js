// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('ClearSection', () => {
    cy.get('.fa-circle-question > path').click()
    cy.get('.sc-dmRaPn').click()
    cy.get('.sc-jIAOiI').type('9832').type('{enter}')
    cy.get(':nth-child(1) > .sc-csvncw > :nth-child(1) > label').click()
    cy.get('.sc-dFdIVH').click()

  })
  Cypress.Commands.add('LogOut', () => {
    cy.contains('Log Out').click()

  })
  Cypress.Commands.add('LogIn', () => {
    cy.visit('/parabank/index.htm?ConnType=JDBC')
    cy.get('input[name="username"]').type('aaa')
    cy.get('input[name="password"]').type('aaa')
    cy.get('input[value="Log In"]').click()

  })
  
