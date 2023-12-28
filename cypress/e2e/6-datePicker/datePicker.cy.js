/// <reference types="cypress" />

import { DatePickerPage } from '../../pages/DatePicker.pages.js'
import moment from "moment";

describe ('Date Picker tests', () => {
    const datePickerPage = new DatePickerPage();
    
    it('Date Picker visability and verify that input has today date value', () => {
        
        const dateToday = moment().format("MMM D, YYYY"); //генеруємо сьогоднішню дату в заданому форматі
        
        datePickerPage.open()
        datePickerPage.elements.dateInput().click()
        cy.get('nb-base-calendar [class="ng-star-inserted"]').should('be.visible')
        cy.get('nb-calendar-day-cell.today').click()
        datePickerPage.elements.dateInput().should('have.value', dateToday)
           

    })
})