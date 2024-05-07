import { Roles } from "./roles";

export interface User {
    username: string,
    firstName: string,
    lastName: string,
    roles: Roles[],
    email: string,
    password: string
}