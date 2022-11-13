class Login
{
getusername(){
    return cy.get('input[name="username"]')
}
getpassword(){
    return cy.get('input[name="password"]')
}
getlogin(){
    return cy.get('input[value="Log In"]')
}
LoginVerification(){
    return cy.get('p b')
}

}
export default Login