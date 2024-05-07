export const loginPage = {

    attemptLogin: (username, password) => {
        cy.get('[name=username]').type(username)
        cy.get('[name=password]').type(password)
        cy.get('.btn-primary').click()
    }

}