demoApp.controller('mainController', function($scope, $location, loginService) 
{
  
  $scope.submitFunction = function(path) {
    //console.log('value: ' + $scope.loginForm.$valid + ' ' + $scope.login_name);
    
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