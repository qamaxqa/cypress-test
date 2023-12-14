/// <reference types="cypress" />
import { FormLoginPage } from '../pages/FormLogin.pages.js'

describe('Form Login', () => {
  const formLoginPage = new FormLoginPage()
  it('test POM', () => {
  cy.visit('/auth/login')
  formLoginPage.elements.emailInput().type('qa@mailinator.com') 
})
})