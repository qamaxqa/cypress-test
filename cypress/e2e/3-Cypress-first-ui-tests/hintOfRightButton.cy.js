//cypress/e2e/3-Cypress-first-ui-tests/hintOfRightButton.cy.js

describe('Hint of "Right" button is visible', () => {
    beforeEach(()=> {
       
    })
    it('Hint of "Right" button is visible ', () => {
        cy.visit('localhost:4200/pages/modal-overlays/popover')
        cy.get('button[ng-reflect-position="right"').trigger("mouseenter")
        cy.contains('nb-popover', 'Hello, how are you today?').should('be.visible')
    
    })
      
    })