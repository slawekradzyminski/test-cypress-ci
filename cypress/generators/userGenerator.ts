import { LoginResponse } from "../types/login"
import { Roles } from "../types/roles"
import { User } from "../types/user"

export const getFakeLoginResponse = (): LoginResponse => {
    return {
        ...getCommonFields(),
        token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOlt7ImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifSx7ImF1dGhvcml0eSI6IlJPTEVfQ0xJRU5UIn1dLCJpYXQiOjE3MTQ5OTUxOTQsImV4cCI6MTcxNDk5NTQ5NH0.jkEwIRXrd4Syv8wCzygXPD3wkfPbpBMeb_zY1rh4_FE'
    }
}

export const getRandomUser = (): User => {
    return {
        ...getCommonFields(),
        password: generateRandomString(8)
    }
}

const getCommonFields = () => {
    return {
        username: generateRandomString(8),
        firstName: generateRandomString(8),
        lastName: generateRandomString(8),
        roles: [ Roles.ROLE_CLIENT, Roles.ROLE_ADMIN ],
        email: `${generateRandomString(8)}@ergo.com`,
    }
}

const generateRandomString = (length: number) => {
    return Array(length)
        .fill(0)
        .map(() => Math.random().toString(36).charAt(2)).join('');
}