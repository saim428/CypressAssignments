class CreateExam
{
getExamName()
{
    return cy.get('#examInput')
}
getShortExamName()
{
    return cy.get('#shortExamName')
}
getExamDescription()
{
    return cy.get('#examDescription') 
}
getExamYear()
{
    return cy.get('#inputForYear')
}
getExamRegionDropdown()
{
    return cy.get('.col-md-7 > .btn-group > .btn > .btn-text')
}
SelectExamRegion()
{
    return cy.get('.col-md-7 > .btn-group > .dropdown-menu > :nth-child(4) > a')
}   
getExamTypeDropdown()
{
    return cy.get('.e-type > .btn-group > .btn > .btn-text')
}
SelectExamType()
{
    return cy.get('.e-type > .btn-group > .dropdown-menu > :nth-child(4) > a')
}
getActivityCode()
{
    return cy.get('#activityCode')
}   
getCreditInput()
{
    return cy.get('#examCreditInput')
}   
getExamPassPercentage()
{
    return cy.get('#examPercentagePassInput')
}   
getNextButton()
{
    return cy.get('[type="submit"]')
}

}
export default CreateExam;