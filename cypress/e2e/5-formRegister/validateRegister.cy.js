/// <reference types="cypress" />
import { FormRegisterPage } from '../../pages/FormRegister.pages.js'

describe('Form Register', () => {
  const formRegisterPage = new FormRegisterPage()
  it('test POM', () => {
  formRegisterPage.open()
  formRegisterPage.elements.fullNameInput().type('qa')
  formRegisterPage.elements.emailInput().type('test')
  formRegisterPage.elements.passwordInput().type('tes')
  formRegisterPage.elements.confirmPasswordInput().type('teq')
})
})