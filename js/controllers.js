demoApp.controller('mainController', function($scope, $location, loginService) 
{
  $scope.submitFunction = function(path, form_valid) {

    if(form_valid) {
      loginService.saveLoginResponse( {login_name: $scope.login_name} );
      
      $location.path( path );
      return true;
    } 
    
    return false;
  };
});

demoApp.controller('thanksController', function($scope, loginService) 
{
  $scope.message = 'Well hello there ' + loginService.getLoginResponse().login_name + '.';
});