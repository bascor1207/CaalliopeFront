export const STORAGE_KEY = Object.freeze({
  USER: 'User',
  LOCALE: 'Locale'
});

export const storageService = {

  get(key) {
    return localStorage.getItem(key);
  },

  set(key, value) {
    localStorage.setItem(key, value);
  },

  getObject(key) {
    try {
      const data = localStorage.getItem(key);
      return JSON.parse(data) || undefined;
    } catch(_e) {
      return undefined;
    }
  },

  setObject(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  remove(key) {
    localStorage.removeItem(key);
  }
};
