/// <reference types="cypress" />

import { getRandomUser } from "../../generators/userGenerator"

describe('Register tests in isolation', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8081/register')
    })

    it('should successfully register', () => {
        const user = getRandomUser()
        cy.intercept('POST', '**/users/signup', (req) => {
            req.reply({
                statusCode: 201,
                body: {
                    token: 'fakeToken'
                }
            })
        })
        cy.get('[name=username]').type(user.username)
        cy.get('[name=password]').type(user.password)
        cy.get('[name=firstName]').type(user.firstName)
        cy.get('[name=lastName]').type(user.lastName)
        cy.get('[name=email]').type(user.email)
        cy.get('.btn-primary').click()

        cy.get('.alert').should('contain.text', 'Registration successful')
        cy.url().should('contain', '/login')
    })

})
