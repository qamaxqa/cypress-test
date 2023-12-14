export class FormLoginPage {
    elements = {
     title: () => cy.get('nb-login [id="title"]'),
     emailInput: () => cy.get('[id="input-email"]')
    }
 }