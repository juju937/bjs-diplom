"use strict";

//login form
let userForm = new UserForm();

userForm.loginFormCallback = data => {
  ApiConnector.login(data, response => {
      if (response.success) {
          location.reload();
      } else {
          userForm.setLoginErrorMessage(response.error);
      }
  });
};

//registration form