/// <reference types="cypress" />

import { getRandomUser } from "../../generators/userGenerator"
import { registerMocks } from "../../mocks/postSignUp"

describe('Register tests in isolation', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8081/register')
    })

    it('should successfully register', () => {
        const user = getRandomUser()
        registerMocks.mockSuccess()
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
