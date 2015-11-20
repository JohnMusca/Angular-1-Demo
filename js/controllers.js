demoApp.controller('mainController', function($scope) 
{
  $scope.message = 'Hello, only John or Peter can proceed';
});


demoApp.controller('thanksController', function($scope) 
{
  $scope.message = 'Look! I am an about page.';
});