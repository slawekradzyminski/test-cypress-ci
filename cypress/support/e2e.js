import './commands'

// This will run before all tests in the project
beforeEach(() => {
    if (Cypress.env("isMobile")) {
        cy.viewport(393, 852)
    }
})
