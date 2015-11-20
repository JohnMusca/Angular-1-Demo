demoApp.config(function($routeProvider, $locationProvider) 
{
  $routeProvider

  .when('/', {
    templateUrl : 'views/login.html',
    controller  : 'mainController'
  })

  .when('/thanks', {
    templateUrl : 'views/thanks.html',
    controller  : 'thanksController'
  })
  
  .otherwise({ redirectTo: '/' });
 
  $locationProvider.html5Mode(true);
});