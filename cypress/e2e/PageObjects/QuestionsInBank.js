class QuestionsInBank
{
Select1stQuestion()
{
    return cy.get(':nth-child(1) > .question > .panel > .panel-heading > .custom-chk')
}  
Select2ndQuestion()
{
    return cy.get(':nth-child(2) > .question > .panel > .panel-heading > .custom-chk')
}  
}
export default QuestionsInBank;