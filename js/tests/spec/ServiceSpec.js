describe("Login service", function () {
  var loginService, httpBackend;

  beforeEach(module("demoApp"));

  beforeEach(inject(function (_loginService_) {
    loginService = _loginService_;
  }));

  it("should do something", function () {
    
    //populate the login service with data to test
    loginService.saveLoginResponse( {login_name: 'John'} );
    loginService.saveLoginResponse( {login_date: '19/12/2015'} );
    
    expect(loginService.getLoginResponse().login_name).toEqual('John');
    expect(loginService.getLoginResponse().login_date).toEqual('19/12/2015');
    expect(loginService.getLoginResponse().login_time).toEqual(undefined);
  });

});