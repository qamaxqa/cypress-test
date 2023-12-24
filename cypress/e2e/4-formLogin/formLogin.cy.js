/// <reference types="cypress" />
import { FormLoginPage } from '../../pages/FormLogin.pages.js'

describe('Form Login', () => {
  const formLoginPage = new FormLoginPage()
  it('test POM', () => {
  formLoginPage.open()
  formLoginPage.elements.emailInput().type('qa@mailinator.com') 
  formLoginPage.elements.passwordInput().type('qwerty')
  formLoginPage.elements.logInButton().click()

})
})