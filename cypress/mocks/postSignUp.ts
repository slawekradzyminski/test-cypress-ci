export const registerMocks = {

    mockSuccess: () => {
        cy.intercept('POST', '**/users/signup', (req) => {
            req.reply({
                statusCode: 201,
                body: {
                    token: 'fakeToken'
                }
            })
        })
    }

}