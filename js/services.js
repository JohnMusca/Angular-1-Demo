/**
 * Service to store the values from the login page, pass in to use as needed
 *
 * saveLoginResponse: data [param]
 * getLoginResponse
 *
 * These methods are used to save and retrieve the login variables for use throughout the application
 */
demoApp.factory('loginService', function () {
  var loginResponse = [];

  return {
      saveLoginResponse:function (data) {
        for (key in data) {
          loginResponse[key] = data[key];
        }
      },
      getLoginResponse:function () {
          return loginResponse;
      }
  };
});