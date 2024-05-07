/// <reference types="cypress" />

import { getFakeLoginResponse } from "../generators/userGenerator"

describe('example to-do app', () => {

    it('should display login page if we use fake credentials', () => {
        const user = getFakeLoginResponse()
        cy.setCookie('token', user.token)
        localStorage.setItem('user', JSON.stringify(user))

        cy.visit('http://localhost:8081')
        cy.get('h2').should('have.text', 'Login')
        cy.url().should('contain', '/login')
    })
  
  })
  