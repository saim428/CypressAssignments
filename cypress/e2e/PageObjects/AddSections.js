class AddSections
{
getSection1Name()
{
    return cy.get('div#section-container div.col-sm-12.section-name:nth-child(1) > input[type=text]')
}
getSection2Name()
{
    return cy.get('div#section-container div.col-sm-12.section-name:nth-child(2) > input[type=text]')
}
getDropdownMenu()
{
    return cy.get('.flip > .btn-group > .btn > .drop-icon > .icon')
}    
SelectAttempts()
{
    return cy.get('li [data-value="3"]')
}
getNext()
{
    return cy.get('.popup-btns > :nth-child(3)')
}  

}
export default AddSections;