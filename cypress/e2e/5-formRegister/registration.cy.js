/// <reference types="cypress" />
import { FormRegisterPage } from '../../pages/FormRegister.pages.js'

describe('Form Register', () => {
  const formRegisterPage = new FormRegisterPage()
  it('test POM', () => {
  formRegisterPage.open()
  formRegisterPage.elements.fullNameInput().type('Maxym')
  formRegisterPage.elements.emailInput().type('qa@mailinator.com')
  formRegisterPage.elements.passwordInput().type('qwerty')
  formRegisterPage.elements.confirmPasswordInput().type('qwerty')
  formRegisterPage.elements.conditionsButton().click()
  formRegisterPage.elements.registerButton().click()
})
})