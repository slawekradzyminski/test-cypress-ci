export const loginMocks = {

    mockSuccess: (fakeLoginResponse) => {
        cy.intercept('POST', '**/users/signin', (req) => {
            req.reply({
                statusCode: 200,
                body: fakeLoginResponse
            })
        })
    },

    mockFailure: (message) => {
        cy.intercept('POST', '**/users/signin', (req) => {
            req.reply({
                statusCode: 422,
                body: {
                    timestamp: "2024-05-06T15:48:46.127+00:00",
                    status: 422,
                    error: "Unprocessable Entity",
                    message: message,
                    path: "/users/signin"
                }
            })
        })
    }

}