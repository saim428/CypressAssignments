/// <reference types = "cypress" />
import Regristration from '../PageObjectsAssg2&3/Registration'
import Login from '../PageObjectsAssg2&3/Login'
import HomePage from '../PageObjectsAssg2&3/HomaPage'
import FundsTransfer from '../PageObjectsAssg2&3/FundsTransfer'
import BillPayment from '../PageObjectsAssg2&3/BillPayment'
import LoanRequest from '../PageObjectsAssg2&3/LoanRequest'
import AdminPage from '../PageObjectsAssg2&3/AdminPage'
import FindTransaction from '../PageObjectsAssg2&3/FindTransaction'

describe('Assignment 2 & 3 Testcases',function()
{
    const Register = new Regristration()
    const login = new Login()
    const homepage= new HomePage()
    const transferfund= new FundsTransfer()
    const paybill= new BillPayment()
    const requestloan = new LoanRequest()
    const admin= new AdminPage()
    const transactions= new FindTransaction()
    beforeEach(function () {
        cy.visit('/parabank/index.htm?ConnType=JDBC')
        cy.fixture('registrationdata').then(function (reginfo) {
            this.reginfo = reginfo
        })
        cy.fixture('BillPayment').then((billdata) => {
            this.billdata = billdata;
        });
    })
   /* afterEach(function(){
        cy.LogOut()
    
    })*/
    it('Test case 1' , function() {
    cy.clearCookies()
    cy.clearLocalStorage()
    Register.getRegisterationButton().click()
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
    login.getusername().type(this.reginfo.lusername)
    login.getpassword().type(this.reginfo.pass)
    login.getlogin().click()
    login.LoginVerification().should('have.text','Welcome')

    })
    it('Test case 2' , function() { 
    
    cy.LogIn()
    login.LoginVerification().should('have.text','Welcome')
    homepage.getNewAccountOpen().click()
    cy.wait(500)
    homepage.selectType()
    homepage.SelectAccID()
    homepage.getOpenNewAcc().click()
    homepage.verifyNewAccount().should('have.text','Account Opened!')

    })

    it('Test case 3' , function() { 
   
    cy.LogIn()
    cy.wait(1000)
 
    cy.get(' #accountTable>tbody >tr td:nth-child(1)').each(($elm, index, $list)=> {
        // text captured from column1
        const t = $elm.text();
        // matching criteria
        if (t.includes('13344')){
           // next sibling captured
           cy.get('#accountTable > tbody > tr > td:nth-child(1)')
           .eq(index).next().then(function(d) {
              // text of following sibling
              const r = d.text()
              //assertion
              expect(r).to.contains('$4922.93');
           })
        }
        if (t.includes('13455')){
            // next sibling captured
            cy.get('#accountTable > tbody > tr > td:nth-child(1)')
            .eq(index).next().then(function(d) {
               // text of following sibling
               const r = d.text()
               //assertion
               expect(r).to.contains('$100.00');
            })
         }
     })
    transferfund.getTransferFund().click()
    cy.wait(500)
    transferfund.selectFromAccount()
    transferfund.selectToAccount()
    transferfund.getAmountField().type('122')
    transferfund.getTransferButton().click()
    transferfund.verifyTransactionComplete().should('have.text','Transfer Complete!')
    transferfund.getAccountOverview().click()
    cy.wait(1000)
    cy.get(' #accountTable>tbody >tr td:nth-child(1)').each(($elm, index, $list)=> {
        // text captured from column1
        const t = $elm.text();
        // matching criteria
        if (t.includes('13344')){
           // next sibling captured
           cy.get('#accountTable > tbody > tr > td:nth-child(1)')
           .eq(index).next().then(function(d) {
              // text of following sibling
              const r = d.text()
              //assertion
              expect(r).to.contains('$4800.93');
           })
        }
        if (t.includes('14898')){
            // next sibling captured
            cy.get('#accountTable > tbody > tr > td:nth-child(1)')
            .eq(index).next().then(function(d) {
               // text of following sibling
               const r = d.text()
               //assertion
               expect(r).to.contains('$222.00');
            })
         }
     })
    
    })
    it('Test case 4' , function() { 
    cy.LogIn()
    paybill.getPayBill().click()
    paybill.getPayeeName().type(this.billdata.payeename)
    paybill.getPayeeAddress().type(this.billdata.Address)
    paybill.getPayeeCity().type(this.billdata.City)
    paybill.getPayeeState().type(this.billdata.State)
    paybill.getPayeeZipCode().type(this.billdata.Zipcode)
    paybill.getPayeePhoneNumber().type(this.billdata.PhoneNumber)
    paybill.getPayeeAccNumber().type(this.billdata.AccNumber)
    paybill.getVerifyAccount().type(this.billdata.VerifyAcc)
    paybill.getAmount().type(this.billdata.Amount)
    paybill.selectAccount()
    paybill.sendPayment().click()
    paybill.BillPaymentVerification().should('have.text','Bill Payment Complete')
    transferfund.getAccountOverview().click()
    cy.wait(1000)
    cy.get(' #accountTable>tbody >tr td:nth-child(1)').each(($elm, index, $list)=> {
        // text captured from column1
        const t = $elm.text();
        // matching criteria
        if (t.includes('13455')){
           // next sibling captured
           cy.get('#accountTable > tbody > tr > td:nth-child(1)')
           .eq(index).next().then(function(d) {
              // text of following sibling
              const r = d.text()
              //assertion
              expect(r).to.contains('$200.00');
           })
        }
       
     })
    })

    it.only('Test case 5' , function() {  
    cy.LogIn()
    transactions.getFindTransactions().click()
    transactions.FindByID().type('15364') 
    transactions.BtnID().click()
    transactions.OpenTransactionByID().click()
    cy.get(' table> tbody > tr > td:nth-child(1)').each(($elm, index, $list)=> {
        // text captured from column1
        const t = $elm.text();
        // matching criteria
        if (t.includes('Transaction ID:')){
           // next sibling captured
           cy.get('#accountTable > tbody > tr > td:nth-child(1)')
           .eq(index).next().then(function(d) {
              // text of following sibling
              const r = d.text()
              //assertion
              expect(r).to.contains('14476');
           })
        }
       
     })   
           
           
    })
    it('Test case 6' , function() { 
    cy.LogIn()
    requestloan.getLoanrequest().click()
    requestloan.getAmount().type('17')
    requestloan.getDownPayment().type('2')
    requestloan.SelectAccount()
    requestloan.getApplyNow().click()
    transferfund.getAccountOverview().click()
    cy.wait(1000)
    cy.get(' #accountTable>tbody >tr td:nth-child(1)').each(($elm, index, $list)=> {
        // text captured from column1
        const t = $elm.text();
        // matching criteria
        if (t.includes('Total')){
           // next sibling captured
           cy.get('#accountTable > tbody > tr > td:nth-child(1)')
           .eq(index).next().then(function(d) {
              // text of following sibling
              const r = d.text()
              //assertion
              expect(r).to.contains('$530.50');
           })
        }
       
     })   
    })
    it('Test case 7' , function() {
   
    cy.LogIn()
    admin.getAdminPage().click()
    admin.getInitializeBtn().click()
    admin.VerifydbInitialized().should('have.text','Database Initialized')  
    transferfund.getAccountOverview().click()
    cy.wait(1000)
    cy.get(' #accountTable>tbody >tr td:nth-child(1)').each(($elm, index, $list)=> {
        // text captured from column1
        const t = $elm.text();
        // matching criteria
        if (t.includes('Total')){
           // next sibling captured
           cy.get('#accountTable > tbody > tr > td:nth-child(1)')
           .eq(index).next().then(function(d) {
              // text of following sibling
              const r = d.text()
              //assertion
              expect(r).to.contains('$1692.67');
           })
        }
       
     })       
    })
         
})