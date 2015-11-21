/**
*  Main controller. Ensures form is valid then redirects to next page.
*
*  @param $location    The location provider.
*  @param loginService The login data service, used to persist data across controllers.
*/
demoApp.controller('mainController', function($scope, $location, loginService) 
{
  /**
  *  Handles submit.
  * 
  *  @param path       The path to redirect to if sucessful.
  *  @param form_valid The validity of the form, passed from the form.
  *
  *  @return boolean     Returns true or false if form is valid or not. 
  */
  $scope.submitFunction = function(path, form_valid) {

    if(form_valid) {
      loginService.saveLoginResponse( {login_name: $scope.login_name} );
      
      $location.path( path );
      return true;
    } 
    
    return false;
  };
});

/**
*  Thanks controller. Displays a thank you message
*
*  @param loginService The login data service, used to persist data across controllers.
*/
demoApp.controller('thanksController', function($scope, loginService) 
{
  $scope.message = 'Well hello there ' + loginService.getLoginResponse().login_name + '.';
});