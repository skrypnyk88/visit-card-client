module.exports = angular
  .module('constants', [])
  .constant('globalSettings', {
    SERVER_URL: 'http://localhost:3000',
    MAIN_STATE: 'main.carts',
    LOGIN_STATE: 'login',
    STUDENT_IMG: './app/img/student.png'
  });
