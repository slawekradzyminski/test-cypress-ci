export const alerts = {

    verifySuccess: (message) => {
        cy.get('.alert-success').should('contain.text', message)
    },

    verifyFailure: (message) => {
        cy.get('.alert-danger').should('contain.text', message)
    }

}