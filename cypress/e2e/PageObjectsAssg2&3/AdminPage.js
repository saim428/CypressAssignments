class AdminPage{
getAdminPage(){
    return cy.get('.leftmenu > :nth-child(6) > a')
}
getInitializeBtn(){
    return cy.get('button[value="INIT"]')
}
VerifydbInitialized(){
    return cy.get('#rightPanel > p > b')
}

}
export default AdminPage