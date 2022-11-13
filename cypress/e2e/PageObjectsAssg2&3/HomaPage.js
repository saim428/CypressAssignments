class HomePage
{
getNewAccountOpen(){
    return cy.get('#leftPanel > ul > :nth-child(1) > a')
}
selectType(){
    return cy.get('#type').select('SAVINGS')
}
SelectAccID(){
    return cy.get('#fromAccountId').select('13344')
}
getOpenNewAcc(){
    return cy.get('input[type="submit"]')
}
verifyNewAccount(){
    return cy.get('.title')
}
}
export default HomePage