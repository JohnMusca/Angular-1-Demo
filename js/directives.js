
demoApp.directive('validateName', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$parsers.unshift(function(viewValue) {
        
        /*
        var allowed_names = ['John', 'Peter'];
        
        var name_passed = allowed_name.filter(function(allowed_names) {
                            return allowed_names === allowed_names;
                          });
                          
        console.log(name_passed);
        */
        
        if (viewValue === 'John') {
          // it is valid
          ctrl.$setValidity('validName', true);
          return viewValue;
        } else if (viewValue === 'Peter') {
          // it is valid
          ctrl.$setValidity('validName', true);
          return viewValue;
        } else {
          ctrl.$setValidity('validName', false);
          return undefined;
        }
         
      });
    }
  };
});