class BillPayment{
getPayBill(){
    return cy.get('#leftPanel > ul > :nth-child(4) > a')
}
getPayeeName(){
    return cy.get('input[name="payee.name"]')
}
getPayeeAddress(){
    return cy.get('input[name="payee.address.street"]')
}
getPayeeCity(){
    return cy.get('input[name="payee.address.city"]')
}
getPayeeState(){
    return cy.get('input[name="payee.address.state"]')
}
getPayeeZipCode(){
    return cy.get('input[name="payee.address.zipCode"]')
}
getPayeePhoneNumber(){
    return cy.get('input[name="payee.phoneNumber"]')
}
getPayeeAccNumber(){
    return cy.get('input[name="payee.accountNumber"]')
}
getVerifyAccount(){
    return cy.get('input[name="verifyAccount"]')
}
getAmount(){
    return cy.get('input[name="amount"]')
}
selectAccount(){
    return cy.get('select').select('13455')
}
sendPayment(){
    return cy.get('input[value="Send Payment"]')
}
BillPaymentVerification(){
    return cy.get('[ng-show="showResult"] > .title')
}
}
export default BillPayment