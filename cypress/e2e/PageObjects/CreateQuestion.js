class CreateQuestion
{
getSectionDropdown()
{
    return cy.get('.col-sm-5 > .btn-group > .btn > .btn-text')
}
EnterQuestion(){
    cy.get('iframe#Question0_ifr').within(fr =>{
    // By javascript Typing in the body of Iframe
    //const [myframe]=fr.get()
    //myframe.contentDocument.body.getElementsByTagName('p')[0].textContent='This is True False radio button Question?'
    
    //By Jquery, Typing in the Body of Iframe
    const body = fr.contents().find('#tinymce')
    cy.wrap(body).clear().type('This is True False radio button Question?')

  })
}
SelectTypeOfQuestion()
{   
    return cy.get('.qtypes-list > :nth-child(1) > a')
}
EnterPoints()
{
    return cy.get('#pointValue')
}
EnterAnswer()
{
    return cy.get(':nth-child(1) > label > .fake-input')
}
getSaveAndClose()
{
    return cy.contains('Save and Close')
}
}
export default CreateQuestion;