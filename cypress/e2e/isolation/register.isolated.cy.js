/// <reference types="cypress" />

import { alerts } from "../../components/alerts"
import { getRandomUser } from "../../generators/userGenerator"
import { registerMocks } from "../../mocks/postSignUp"
import { registerPage } from "../../pages/registerPage"

describe('Register tests in isolation', () => {
    beforeEach(() => {
        cy.visit('/register')
    })

    it('should successfully register', () => {
        // given
        const user = getRandomUser()
        registerMocks.mockSuccess()

        // when
        registerPage.attemptRegister(user)

        // then
        alerts.verifySuccess('Registration successful')
        cy.url().should('contain', '/login')
    })

})
