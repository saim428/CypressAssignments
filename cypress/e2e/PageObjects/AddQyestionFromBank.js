class AddQuestionsFromBank
{
getSectionDropdown()
{
       return cy.get('.drop-icon > .icon')
}
SelectSection1()
{   
    return cy.get('.btn-group > .dropdown-menu > :nth-child(2) > a')
} 
AddToExam()
{   
    return cy.get('.popup-btns > :nth-child(2)')
}
SelectSection2()
{
    return cy.get('.btn-group > .dropdown-menu > :nth-child(3) > a')
}
}
export default AddQuestionsFromBank