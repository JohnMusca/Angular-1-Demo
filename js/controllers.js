demoApp.controller('mainController', function($scope, $location, loginService) 
{
  $scope.submitFunction = function(path) {

    if($scope.loginForm.$valid) {
      loginService.saveLoginResponse( {login_name: $scope.login_name} );
      
      $location.path( path );
      return true;
    }
  };
});

demoApp.controller('thanksController', function($scope, loginService) 
{
  $scope.message = 'Well hello there ' + loginService.getLoginResponse().login_name + '.';
});