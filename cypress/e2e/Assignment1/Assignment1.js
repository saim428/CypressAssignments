/// <reference types = "cypress" />

describe('Assignment 1 Testcases',function()
{
it('Successful login test' , function() {
    cy.visit("login")
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('button[type="submit"]').click()
    cy.get('.subheader').should('have.text','Welcome to the Secure Area. When you are done click logout below.')



})
it('Unsuccessful login test' , function() {
    cy.visit("login")
    cy.get('#username').as('saimjahangir')
    cy.get('#password').as('wrongpassword!')
    cy.get('@saimjahangir').type('wrongusername')
    cy.get('@wrongpassword!').type('Wpass')
    cy.get('button[type="submit"]').click()
    // this assertion is on url 
    cy.url().should('eq', 'https://the-internet.herokuapp.com/login')
    // this assertion is to validate error message
    cy.get('#flash').then((element) => 
    {
    const res=element.text()
        if(res.includes('Your username is invalid!'));
        cy.log(res)
        expect(res).to.exist
        
     })

})

it('Add Element test' , function() {
    cy.visit("add_remove_elements/")
   /* for(let n = 0; n < 5; n ++){
        cy.get('button').click({ multiple: true })
        cy.wait(500)
      }
    */
    //  cy.get('button').click().click().click().click()
    cy.get('button').as('addbutton');

  // Simulate a button mash. Click the button 4 times.
  Cypress._.times(4, function () {
    cy.get('@addbutton')
      
      .click({force: true});
  });
  cy.get('.added-manually').should('have.length',4)
})

it('Dropdown selection test' , function() {
    cy.visit("dropdown")
    cy.get('#dropdown').select('Option 1').should('have.value','1')
    cy.get('#dropdown').select('Option 2').should('have.value','2')
  
})

it('Images src attribute test' , function() {
    cy.visit("broken_images")
    cy.get('.example img').each(($el, index) => {
      const src_attr_values = ["asdf.jpg","hjkl.jpg","img/avatar-blank.jpg"]
      expect($el).attr('src').to.contain(src_attr_values[index])

     
  
})
})
})