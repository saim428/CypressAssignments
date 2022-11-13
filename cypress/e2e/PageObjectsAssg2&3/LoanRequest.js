class LoanRequest{
getLoanrequest(){
    return cy.get('#leftPanel > ul > :nth-child(7) > a')
}
getAmount(){
    return cy.get('#amount')
}
getDownPayment(){
    return cy.get('#downPayment')
}
SelectAccount(){
    return cy.get('#fromAccountId').select('13566')
}
getApplyNow(){
    return cy.get('input[value="Apply Now"]')
}
}
export default LoanRequest