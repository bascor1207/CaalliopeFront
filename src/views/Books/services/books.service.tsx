import axios from 'axios';

import { getBaseUrl } from '../../../utilities';

const baseUrl = getBaseUrl('books');

export const booksService = {

  getBooks() {
    return axios.get(baseUrl).then((response) => response.data);
  },

  getBook(id) {
    return axios.get(`${baseUrl}/${id}`).then((response) => response.data);
  },

  updateStock(id, stock) {
    return axios.patch(`${baseUrl}/${id}`, { stock });
  }
};
