/// <reference types = "cypress" />
import Regristration from '../PageObjectsAssg2&3/Registration'

describe('Assignment 2 & 3 Testcases',function()
{
    const Register = new Regristration()
    before(function () {
        cy.visit('/parabank/register.htm')
        cy.fixture('registrationdata').then(function (reginfo) {
            this.reginfo = reginfo
        })
    })
    it('Test case 1' , function() {
    cy.clearCookies()
    cy.clearLocalStorage()
    Register.getFirstName().type(this.reginfo.firstname)
    Register.getLastName().type(this.reginfo.lastname)
    Register.getAddress().type(this.reginfo.address)
    Register.getCity().type(this.reginfo.city)
    Register.getState().type(this.reginfo.state)
    Register.getZipCode().type(this.reginfo.zipcode)
    Register.getPhoneNo().type(this.reginfo.phoneNumber)
    Register.getSSN().type(this.reginfo.ssn)
    Register.getUserName().type(this.reginfo.existing_username)
    Register.getPassword().type(this.reginfo.password)
    Register.getConfirm().type(this.reginfo.confirm)
    Register.getRegisterButton().click()
    Register.getUserAlreadyExist().should('have.text','This username already exists.')
    Register.getUserName().clear().type(this.reginfo.username)
    Register.getPassword().type(this.reginfo.password)
    Register.getConfirm().type(this.reginfo.mismatchPassword)
    Register.getRegisterButton().click()
    Register.getUserAlreadyExist().should('have.text','Passwords did not match.')
    cy.reload(true)
    Register.getUserName().clear().type(this.reginfo.new_user)
    Register.getPassword().type(this.reginfo.password)
    Register.getConfirm().type(this.reginfo.confirm)
    cy.wait(500)
    Register.getRegisterButton().click()



})
})