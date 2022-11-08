class Regristration
{
getFirstName()
{
    return cy.get('input[name="customer.firstName"]')
}
getLastName()
{
    return cy.get('input[name="customer.lastName"]')
}
getAddress()
{
    return cy.get('input[name="customer.address.street"]')
}
getCity()
{
    return cy.get('input[name="customer.address.city"]')
}
getState()
{
    return cy.get('input[name="customer.address.state"]')
}
getZipCode()
{
    return cy.get('input[name="customer.address.zipCode"]')
}
getPhoneNo()
{
    return cy.get('input[name="customer.phoneNumber"]')
}
getSSN()
{
    return cy.get('input[name="customer.ssn"]')
}
getUserName()
{
    return cy.get('input[name="customer.username"]')
}
getPassword()
{
    return cy.get('input[name="customer.password"]')
}
getConfirm()
{
    return cy.get('input[name="repeatedPassword"]')
}
getRegisterButton()
{
    return cy.get('input[value="Register"]')
}
getUserAlreadyExist()
{
    return cy.get('.error')
}

}
export default Regristration