demoApp.controller('mainController', function($scope, $location, loginService) 
{
  $scope.login_name = '';
  
  $scope.submitFunction = function(path) {
    if($scope.loginForm.$valid) {
      $location.path( path );
      return true;
    }
  };
});

demoApp.controller('thanksController', function($scope, loginService) 
{
  $scope.message = 'Look! I am an about page.';
});