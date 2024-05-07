/// <reference types="cypress" />

import { alerts } from "../../components/alerts"
import { getFakeLoginResponse } from "../../generators/userGenerator"
import { getUsersMocks } from "../../mocks/getUsers"
import { loginMocks } from "../../mocks/postSignIn"
import { loginPage } from "../../pages/loginPage"

describe('Login tests in isolation', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8081')
    })

    it('should successfully login', () => {
        // given
        const fakeLoginResponse = getFakeLoginResponse()
        loginMocks.mockSuccess(fakeLoginResponse)
        getUsersMocks.mockUsers()

        // when
        loginPage.attemptLogin(fakeLoginResponse.username, 'correct')

        // then
        cy.get('h1').should('contain.text', fakeLoginResponse.firstName)
    })

    it('should fail to login', () => {
        // given
        const message = "Invalid username/password supplied"
        loginMocks.mockFailure(message)

        // when
        loginPage.attemptLogin("wrong", "wrong")

        // then
        alerts.verifyFailure(message)
    })

})
