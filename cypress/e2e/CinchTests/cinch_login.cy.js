/// <reference types = "cypress" />
it('cinch login test' , function() {
  cy.visit('https://cinch-refactored.herokuapp.com/login')
  cy.get(':nth-child(1) > .form-control').type('admin')
  cy.get(':nth-child(2) > .form-control').type('admin')
  cy.get('.btn').click()
  })