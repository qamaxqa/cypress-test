export class FormLoginPage {
    elements = {
     title: () => cy.get('nb-login [id="title"]'),
     emailInput: () => cy.get('[id="input-email"]'),
     passwordInput: () => cy.get('#input-password'),
     logInButton: () => cy.contains('[status="primary"]', 'Log In'),
     forgotPasswordButton: () => cy.get('a[class="forgot-password caption-2"]'),
     emailInput2: () => cy.get('[id="input-email"]'),
     backToLogIn: () => cy.get('a[class="text-link"]'),
     registerButton: () => cy.get('a[class="text-link"]').eq(1)
    }
    open(){
        return cy.visit('/auth/login')
    }
 }