export const alerts = {

    verifySuccess: (message: string) => {
        cy.get('.alert-success').should('contain.text', message)
    },

    verifyFailure: (message: string) => {
        cy.get('.alert-danger').should('contain.text', message)
    }

}