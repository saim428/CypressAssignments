/// <reference types = "cypress" />
///<reference types="cypress-iframe" />
import 'cypress-iframe';
import Dashboard from '../PageObjects/Dashboard'
import ExamList from '../PageObjects/ExamList'
import CreateExam from '../PageObjects/CreateExam'
import AddSections from '../PageObjects/AddSections'
import ViewExam from '../PageObjects/ViewExam'
import QuestionsInBank from '../PageObjects/QuestionsInBank'
import AddQuestionsFromBank from '../PageObjects/AddQyestionFromBank'
import CreateQuestion from '../PageObjects/CreateQuestion'



describe('Login and create exam on cinch',function(){

const dashboard=new Dashboard()
const examList=new ExamList()
const createExam=new CreateExam()
const addSection=new AddSections()
const viewExam =new ViewExam()
const questionsInBank= new QuestionsInBank()
const addQuestionFromBank = new AddQuestionsFromBank()
const createQuestion = new CreateQuestion()
{
it('cinch login test' , function() {
    //let url = Cypress.config().baseUrl;
    //cy.visit(url)
    cy.visit('login')
    cy.get(':nth-child(1) > .form-control').type('admin')
    cy.get(':nth-child(2) > .form-control').type('admin')
    cy.get('.btn').click()
    cy.wait(500)

})
it('cinch create exam and add sections in that exam' , function() {
    dashboard.getExamsList().click()
    examList.createNewExam().click()
    createExam.getExamName().type('TestCourseAutomation')
    createExam.getShortExamName().type('TCA')
    createExam.getExamDescription().type('This course is created with automation script')
    createExam.getExamYear().type('2021')
    createExam.getExamRegionDropdown().click()
    createExam.SelectExamRegion().click()
    createExam.getExamTypeDropdown().click()
    createExam.SelectExamType().click()
    createExam.getActivityCode().type('TCA42')
    createExam.getCreditInput().type('4')
    createExam.getExamPassPercentage().type('40')
    createExam.getNextButton().click() 
    cy.wait(500)
    addSection.getSection1Name().type('Section 1')
    addSection.getSection2Name().type('Section 2')
    addSection.getDropdownMenu().click()
    addSection.SelectAttempts().click()
    addSection.getNext().click()
    viewExam.getPageTitle().should('contain','TestCourseAutomation')

})
it('Add Questions is Exam from Bank' , function() {
    viewExam.SelectBank().click()
    questionsInBank.Select1stQuestion().click()
    addQuestionFromBank.getSectionDropdown().click()
    addQuestionFromBank.SelectSection1().click()
    addQuestionFromBank.AddToExam().click()
    viewExam.SelectBank().click()
    questionsInBank.Select2ndQuestion().click()
    addQuestionFromBank.getSectionDropdown().click()
    addQuestionFromBank.SelectSection2().click()
    addQuestionFromBank.AddToExam().click()

    })

it('Create Questions and add in Exam' , function() {
       viewExam.SelectCreateQuestion().click()
       createQuestion.getSectionDropdown().click()
       addQuestionFromBank.SelectSection1().click()
       createQuestion.SelectTypeOfQuestion().click()
     

      //cy.get('iframe#Question0_ifr').within(fr =>{
        // By javascript
        //const [myframe]=fr.get()
        //myframe.contentDocument.body.getElementsByTagName('p')[0].textContent='This is True False radio button Question?'
        
        //By Jquery
       // const body = fr.contents().find('#tinymce')
       // cy.wrap(body).clear().type('This is True False radio button Question?')

   //   })
    

       
       createQuestion.EnterQuestion()
       createQuestion.EnterPoints().type('90')
       createQuestion.EnterAnswer().click()
       createQuestion.getSaveAndClose().click()
    
        })

}})