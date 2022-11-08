class ViewExam
{
getPageTitle()
{
    return cy.get('.page-title')
}  
SelectBank()
{
    return cy.get('.flex > :nth-child(2) > .button')
}
SelectCreateQuestion()
{
    return cy.get('.flex > :nth-child(1) > .button')
}
}
export default ViewExam;