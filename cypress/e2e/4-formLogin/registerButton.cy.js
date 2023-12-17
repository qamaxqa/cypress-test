/// <reference types="cypress" />
import { FormLoginPage } from '../../pages/FormLogin.pages.js'

describe('Form Login', () => {
  const formLoginPage = new FormLoginPage()
  it('test POM', () => {
  formLoginPage.open()
  formLoginPage.elements.forgotPasswordButton().click()
  formLoginPage.elements.registerButton().click()
})
})