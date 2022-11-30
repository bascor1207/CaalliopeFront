import axios from 'axios';

import { getBaseUrl } from '../utilities';

const baseUrl = getBaseUrl('users');

export const usersService = {

  getUsers() {
    return axios.get(baseUrl).then((response) => response.data);
  },

  findUser(email, password) {
    return usersService.getUsers().then((users) => (
      users.find((u) => u.email === email && u.password === password)
    ));
  }
};
