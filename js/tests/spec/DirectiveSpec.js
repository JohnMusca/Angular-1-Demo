describe('directives', function() {
  var $scope, form;
  beforeEach(module('demoApp'));
  
  beforeEach(inject(function($compile, $rootScope) {
    $scope = $rootScope;
    var element = angular.element(
      '<form name="form">' +
      '<input ng-model="model.login_name" name="login_name" validate-name />' +
      '</form>'
    );
    
    $scope.model = { login_name: null }
    $compile(element)($scope);
    form = $scope.form;
  }));

  describe('validateName', function() {
    
    //test for John
    it('should pass with John', function() {
      form.login_name.$setViewValue('John');
      $scope.$digest();
      expect($scope.model.login_name).toEqual('John');
      expect(form.login_name.$valid).toBe(true);
    });

    //test for Peter
    it('should pass with Peter', function() {
      form.login_name.$setViewValue('Peter');
      $scope.$digest();
      expect($scope.model.login_name).toEqual('Peter');
      expect(form.login_name.$valid).toBe(true);
    });

    //test for Paul
    it('should not pass with Paul', function() {
      form.login_name.$setViewValue('Paul');
      $scope.$digest();
      expect($scope.model.login_name).toBeUndefined();
      expect(form.login_name.$valid).toBe(false);
    });
    
  });
});