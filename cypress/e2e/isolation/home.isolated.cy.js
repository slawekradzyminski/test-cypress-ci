/// <reference types="cypress" />

import { getFakeLoginResponse } from "../../generators/userGenerator"
import { getUsersMocks } from "../../mocks/getUsers"

describe('Home tests in isolation', () => {

    beforeEach(() => {
        const user = getFakeLoginResponse()
        cy.setCookie('token', user.token)
        localStorage.setItem('user', JSON.stringify(user))
        getUsersMocks.mockUsers()
    })

    it('should display home page', () => {
        // when (testowana akcja)
        cy.visit('http://localhost:8081')

        // then (asercje)
        cy.get('li').should('have.length.at.least', 1)
    })

})
