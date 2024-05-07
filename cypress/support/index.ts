import { User } from "../types/user";

declare global {
    namespace Cypress {
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
            register(user: User): void;
        }
    }
}