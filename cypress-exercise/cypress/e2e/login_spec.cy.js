describe('Login Test', () => {
  // Kịch bản 1: Đăng nhập thành công
  it('Should login successfully with valid credentials', () => {
    cy.login('standard_user', 'secret_sauce');
    cy.url().should('include', '/inventory.html');
  });

  // Kịch bản 2: Đăng nhập thất bại
  it('Should show error message with invalid credentials', () => {
    cy.login('invalid_user', 'wrong_password');
    cy.get('.error-message-container').should('contain', 'Username and password do not match');
  });
});
