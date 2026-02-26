// ***********************************************
// Custom Commands cho dự án Cypress E2E Testing
// ***********************************************

// Lệnh đăng nhập tái sử dụng
Cypress.Commands.add('login', (username = 'standard_user', password = 'secret_sauce') => {
  cy.visit('/');
  cy.get('#user-name').type(username);
  cy.get('#password').type(password);
  cy.get('#login-button').click();
});

// Lệnh thêm sản phẩm đầu tiên vào giỏ hàng
Cypress.Commands.add('addFirstProductToCart', () => {
  cy.get('.inventory_item').first().find('.btn_inventory').click();
});

// Lệnh điền thông tin thanh toán
Cypress.Commands.add('fillCheckoutInfo', (firstName, lastName, zipCode) => {
  cy.get('#first-name').type(firstName);
  cy.get('#last-name').type(lastName);
  cy.get('#postal-code').type(zipCode);
});