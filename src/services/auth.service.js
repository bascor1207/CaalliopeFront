import { usersService } from './users.service';

export const authService = {

  connect(email, password) {
    return usersService.findUser(email, password).then((user) => {
      if (user) {
        delete user.password;
        return user;
      }
      throw new Error('User not found');
    });
  },

  disconnect() {
    return true;
  }
};
