export class FormRegisterPage {
    elements = {
     title: () => cy.get('nb-register [id="title"]'),
     fullNameInput: () => cy.get('[id="input-name"]'),
     emailInput: () => cy.get('[id="input-email"]'),
     passwordInput: () => cy.get('[id="input-password"]'),
     confirmPasswordInput: () => cy.get('[id="input-re-password"]'),
     conditionsButton: () => cy.get('span[class="custom-checkbox"]'),
     registerButton: () => cy.contains('[status="primary"]', 'Register')
    }
    open(){
        return cy.visit('/auth/register')
    }
 }