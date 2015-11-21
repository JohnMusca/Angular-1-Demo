
demoApp.directive('validateName', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$parsers.unshift(function(viewValue) {
        
        if (viewValue == 'John') {
          // it is valid
          ctrl.$setValidity('integer', true);
          return viewValue;
        }
        
        if (viewValue == 'Peter') {
          // it is valid
          ctrl.$setValidity('integer', true);
          return viewValue;
        }
         
      });
    }
  };
});