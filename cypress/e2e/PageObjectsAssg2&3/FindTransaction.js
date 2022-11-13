class FindTransaction{
getFindTransactions(){
    return cy.get('#leftPanel > ul > :nth-child(5) > a')
}
FindByID(){
    return cy.get('#criteria\.transactionId')
}
BtnID(){
    return cy.get(':nth-child(5) > .button')
}
OpenTransactionByID(){
    return cy.get(':nth-child(2) > .ng-binding')
}
FindByDate(){
    return cy.get('#criteria\.onDate')
}
BtnDate(){
    cy.get(':nth-child(9) > .button')
}
FindByFromDate(){
    cy.get('#criteria\.fromDate')
}
FindByToDate(){
    return cy.get('#criteria\.toDate')
}
BtnRange(){
    return cy.get(':nth-child(13) > .button')
}
FindByAmount(){
    return cy.get('#criteria\.amount')
}
BtnAmount(){
    return cy.get(':nth-child(17) > .button')
}
}
export default FindTransaction