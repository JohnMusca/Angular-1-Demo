/**
*  Directive to validate name.
*
*  @param string login_name The login name.
*
*  @return Mixed sets return to undefined or the name entered if valid.
*/
demoApp.directive('validateName', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$parsers.unshift(function(viewValue) {

        var allowed_names = ['John', 'Peter'];
        
        //high order function to determine if name is allowed
        var name_passed = allowed_names.filter(function(allowed_names) {
                            return allowed_names === viewValue;
                          });

        //high order function for handling validity
        var handle_validity = function(isValidName, returnValue) {
                                ctrl.$setValidity('validName', isValidName);
                                return returnValue;
                              };

        if(name_passed.length !== 0) {
          return handle_validity(true, viewValue);
        }
        
        return handle_validity(false, undefined);
      });
    }
  };
});