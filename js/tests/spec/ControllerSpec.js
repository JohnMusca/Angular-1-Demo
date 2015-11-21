describe('mainController', function() {
  beforeEach(module('demoApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('mainController validation methods', function() {
    it('ensures the form is valid before redirecting to second step', function() {
      var $scope = {};
      var controller = $controller('mainController', { $scope: $scope });
      
      expect($scope.submitFunction('/thanks', true)).toEqual(true);
      expect($scope.submitFunction('/thanks', false)).toEqual(false);
    });
  });
});

describe('thanksController', function() {
  beforeEach(module('demoApp'));

  var $controller, loginService;

  beforeEach(inject(function(_$controller_, _loginService_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    loginService = _loginService_;
  }));

  describe('thanksController display method', function() {
    it('ensures the data is correct from the service when displaying', function() {
      var $scope = {};
      loginService.saveLoginResponse( {login_name: 'John'} );
      var controller = $controller('thanksController', { $scope: $scope, loginService:  loginService});
      
      expect($scope.message).toEqual('Well hello there John.');
    });
  });
});