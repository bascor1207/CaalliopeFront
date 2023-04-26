import axios from 'axios';

export const usersService = {
    apiUrl: 'http://localhost:8000/api',

    async getBooks() {
        return await axios.get(`${this.apiUrl}/books`);
    },

    async getBook(id: string) {
        return await axios.get(`${this.apiUrl}/books/${id}`);
    },

    async updateBook(newValues: Object, id: string, token: string) {
        return await axios.patch(
        `${this.apiUrl}/books/${id}`,
        { ...newValues },
        {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        }
        );
    },

    async deleteBook(id: string, token: string) {
        return await axios.delete(`${this.apiUrl}/books/${id}`, {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
    },
};
