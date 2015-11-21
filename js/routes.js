
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
 
  /*
  html5Mode throws errors if not running over a web server (browser security).
  uncomment this and base element in index.html if you want to have nice urls and run via webserver.
  */
  //$locationProvider.html5Mode(true);
});