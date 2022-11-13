class Login
{
getusername(){
    return cy.get('input[name="username"]')
}
getpassword(){
    return cy.get('input[name="password"]')
}
}
export default Login