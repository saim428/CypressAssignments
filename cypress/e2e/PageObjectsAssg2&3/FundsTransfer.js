class FundsTransfer{
getAccountOverview(){
    return cy.get('#leftPanel > ul > :nth-child(2) > a')
}
getTransferFund(){
    return cy.get('#leftPanel > ul > :nth-child(3) > a')
}
getAmountField(){
    return cy.get('#amount')
}
selectFromAccount(){
    return cy.get('#fromAccountId').select('13344')
}
selectToAccount(){
    return cy.get('#toAccountId').select('13455')
}
getTransferButton(){
    return cy.get('input[value="Transfer"]')
}
verifyTransactionComplete(){
    return cy.get('.title')
}

}
export default FundsTransfer