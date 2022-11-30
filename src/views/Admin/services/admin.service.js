import axios from 'axios';

import { getBaseUrl } from '../../../utilities';

const authorsUrl = getBaseUrl('authors');
const booksUrl = getBaseUrl('books');

export const adminService = {

  createBook(book) {
    return axios.post(booksUrl, book).then((response) => response.data);
  },

  createAuthor(author) {
    return axios.post(authorsUrl, author).then((response) => response.data);
  },

  getAuthors() {
    return axios.get(authorsUrl).then((response) => response.data);
  },

  getAuthorsNames() {
    return adminService.getAuthors().then((authors) => authors.map((a) => ({
      id: a.id,
      name: `${a.lastName} ${a.firstName}`
    })));
  }
};
