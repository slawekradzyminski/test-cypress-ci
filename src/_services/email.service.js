import { handleResponse } from "./user.service";
import config from 'config';
import { authHeader } from '../_helpers';

export const sendEmail = (email) => {
    const requestOptions = {
        method: 'POST',
        headers: {...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(email)
    };

    return fetch(`${config.apiUrl}/email`, requestOptions).then(handleResponse);
}