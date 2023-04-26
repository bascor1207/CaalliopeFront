import axios from 'axios';

import { getBaseUrl } from '../../../utilities/getBaseUrl';

const baseUrl = getBaseUrl('books');

export const booksService = {

    getBooks() {
        return axios.get(baseUrl).then((response) => response.data);
    },

    getBook(id: number) {
        return axios.get(`${baseUrl}/${id}`).then((response) => response.data);
    },

    updateStock(id: number, stock: number) {
        return axios.patch(`${baseUrl}/${id}`, { stock });
    }
};
