module.exports = angular
  .module('constants', [])
  .constant('globalSettings', {
    SERVER_URL: 'http://localhost:3000',
    MAIN_STATE: 'main.cards',
    DEFAULT_PHOTO: './app/img/boy.png',
    LOGIN_STATE: 'login'
  })
  .constant('errorMessages', {
    NO_AUTH: 'Invalid Email/Password',
    AUTH_TIMEOUT: 'Session has expired'
  });
