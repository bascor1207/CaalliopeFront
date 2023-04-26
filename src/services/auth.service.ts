import axios from 'axios';

export const authService = {
    apiUrl:  'http://localhost:8000/api',

    async register(firstname: string, lastname: string, email: string, password: string) {
        return await axios.post(`${this.apiUrl}/register`, { firstname, lastname, email, password });
    },

    async login(email: string, password: string) {
        return await axios.post(`${this.apiUrl}/login`, { email, password });
    },

    logout() {
        return true;
    }
};
