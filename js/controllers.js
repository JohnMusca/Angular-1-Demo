demoApp.controller('mainController', function($scope) 
{
  $scope.login_name = '';
  
  var submitFunction = function() {
    return "blah";
  };
  
  $scope.submitFunction=submitFunction();
});


demoApp.controller('thanksController', function($scope) 
{
  $scope.message = 'Look! I am an about page.';
});