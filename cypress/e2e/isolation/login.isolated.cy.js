/// <reference types="cypress" />

import { getFakeLoginResponse } from "../../generators/userGenerator"
import { getUsersMocks } from "../../mocks/getUsers"
import { loginMocks } from "../../mocks/postSignIn"

describe('Login tests in isolation', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8081')
    })

    it('should successfully login', () => {
        const fakeLoginResponse = getFakeLoginResponse()
        loginMocks.mockSuccess(fakeLoginResponse)
        getUsersMocks.mockUsers()

        cy.get('[name=username]').type(fakeLoginResponse.username)
        cy.get('[name=password]').type('password')
        cy.get('.btn-primary').click()

        cy.get('h1').should('contain.text', fakeLoginResponse.firstName)
    })

    it('should fail to login', () => {
        const message = "Invalid username/password supplied"
        loginMocks.mockFailure(message)

        cy.get('[name=username]').type('wrong')
        cy.get('[name=password]').type('password')
        cy.get('.btn-primary').click()

        cy.get('.alert-danger').should('have.text', message)
    })

})
