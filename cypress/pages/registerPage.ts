import { User } from "../types/user"

export const registerPage = {

    selectors: {
        loginFieldCss: '[name=username]'
    },

    attemptRegister: (user: User) => {
        cy.get(registerPage.selectors.loginFieldCss).type(user.username)
        cy.get('[name=password]').type(user.password)
        cy.get('[name=firstName]').type(user.firstName)
        cy.get('[name=lastName]').type(user.lastName)
        cy.get('[name=email]').type(user.email)
        cy.get('.btn-primary').click()
    }

}