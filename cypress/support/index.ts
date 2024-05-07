// Drogie IDE w przestrzeni nazw Cypress rozszerz interfejs Chainable o funkcję login
declare namespace Cypress {
    interface Chainable {
        /**
         * This function logs user in via backend
         * @param username string
         * @param password string
         */
        login(username: string, password: string): void;

        /**
         * This function register new user
         */
        register(user: object): void;
    }
}