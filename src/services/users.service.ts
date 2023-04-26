import axios from 'axios';

export const usersService = {
    apiUrl: 'http://localhost:8000/api',

    async getUsers(token: string) {
        return await axios.get(`${this.apiUrl}/users`, {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
    },

    async getUser(id: string, token: string) {
        return await axios.get(`${this.apiUrl}/users/${id}`, {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
    },

    async updateUser(newValues: Object, id: string, token: string) {
        return await axios.patch(
        `${this.apiUrl}/users/${id}`,
        { ...newValues },
        {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        }
        );
    },

    async deleteUser(id: string, token: string) {
        return await axios.delete(`${this.apiUrl}/users/${id}`, {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
    },
};
