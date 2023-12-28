//cypress/e2e/3-Cypress-first-ui-tests/enteredName.cy.js

describe('Entered Name', () => {
    beforeEach(()=> {
       
    })

    it('Entered Name is contained in "Names" list', () => {
        cy.visit('localhost:4200/pages/modal-overlays/dialog')
        cy.contains('button', 'Enter Name').click()
        cy.get('input[class="size-medium shape-rectangle"]').type('Max')
        cy.get('input[class="size-medium shape-rectangle"]').should('have.value', 'Max')
        cy.get('button[class="appearance-filled size-medium status-success shape-rectangle transitions"]').click()
        cy.get('nb-card-body[class="result-from-dialog"]').should('contain', 'Max')
    
    })
      
    })