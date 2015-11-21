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
      
      expect($scope.submitFunction('/thanks')).toEqual(true);
    });
  });
});