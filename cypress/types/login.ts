import { Roles } from "./roles";

export interface LoginResponse {
    username: string,
    firstName: string,
    lastName: string,
    roles: Roles[],
    email: string,
    token: string
}