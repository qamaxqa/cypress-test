/// <reference types="cypress" />

describe('Intercept demo', () => {

    it('should make a GET request', () => { 
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/')
            .then(res => {
                expect(res.status).to.eq(200)
                console.log(res)
            })
    })

    it('should make a POST request', () => { 
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1,
        }).then(res => {
            expect(res.status).to.eq(201)
            console.log(res)
        }) 
    })

    it('should make a PUT request', () => { 
        cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/99', {
            title: 'foo',
            body: 'barr',
            userId: 12,
        }).then(res => {
            expect(res.status).to.eq(200)
            console.log(res)
        })  
    })

    it('should make a PATCH request', () => { 
        cy.request('PATCH', 'https://jsonplaceholder.typicode.com/posts/99', {
            title: 'foow',
        }).then(res => {
            expect(res.status).to.eq(200)
            console.log(res)
        })  
    }) 

    it('should make a DELETE request', () => { 
        cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/99')
            .then(res => {
                expect(res.status).to.eq(200)
                console.log(res)
            })  
    })
})
