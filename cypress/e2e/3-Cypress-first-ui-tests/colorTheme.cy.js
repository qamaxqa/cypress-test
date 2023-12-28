//cypress/e2e/3-Cypress-first-ui-tests/colorTheme.cy.js

describe('Color Theme Test', () => {
   beforeEach(()=> {
      
   })
  it('change each color shema in row and check background-color', () => {

      const colors = {
          "Light": "rgb(255, 255, 255)",
          "Dark": "rgb(34, 43, 69)",
          "Cosmic": "rgb(50, 50, 89)",
          "Corporate": "rgb(255, 255, 255)"
         };

      cy.visit('localhost:4200/')
      cy.get('button[class="select-button"]').should('be.visible').click()
      cy.get('ul nb-option[ng-reflect-value="dark"]').click()
      cy.get('nb-layout-header nav').should('have.css','background-color',colors.Dark)


      cy.get('button[class="select-button"]').click()
      cy.get('ul nb-option[ng-reflect-value="cosmic"]').click()
      cy.get('nb-layout-header nav').should('have.css','background-color',colors.Cosmic)


      cy.get('button[class="select-button"]').click()
      cy.get('ul nb-option[ng-reflect-value="corporate"]').click()
      cy.get('nb-layout-header nav').should('have.css','background-color',colors.Corporate)



  })

})