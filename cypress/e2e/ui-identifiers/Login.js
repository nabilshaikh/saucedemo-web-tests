class Login {
  getUsername() {
    return cy.get('[data-test=username]');
  }

  getPassword() {
    return cy.get('[data-test=password]');
  }

  getLoginButton() {
    return cy.get('[data-test=login-button]');
  }
}

export default Login;