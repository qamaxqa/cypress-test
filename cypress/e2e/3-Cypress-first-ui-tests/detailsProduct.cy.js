//cypress/e2e/3-Cypress-first-ui-tests/detailsProduct.cy.js

describe('Product Details', () => {
    beforeEach(()=> {
       
    })
    it('Text from "Product Details" block visibility', () => {
    cy.visit('localhost:4200/pages/layout/accordion')
    cy.contains('nb-accordion-item-body', 'hydrogen, helium and other ionized gases.').should('be.hidden')
    cy.get('button[class="appearance-filled size-medium status-primary shape-rectangle transitions"]').click()
    cy.contains('nb-accordion-item-body', 'hydrogen, helium and other ionized gases.').should('be.visible')
         
})

})