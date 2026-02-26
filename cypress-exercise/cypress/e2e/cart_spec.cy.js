describe('Cart Test', () => {
  beforeEach(() => {
    cy.login();
  });

  // Kịch bản 3: Thêm sản phẩm vào giỏ hàng
  it('Should add a product to the cart', () => {
    cy.addFirstProductToCart();
    cy.get('.shopping_cart_badge').should('have.text', '1');
  });

  // Kịch bản 4: Lọc sản phẩm theo giá thấp đến cao
  it('Should sort products by price low to high', () => {
    cy.get('.product_sort_container').select('lohi');
    cy.get('.inventory_item_price').first().should('have.text', '$7.99');
  });

  // Kịch bản 5: Xóa sản phẩm khỏi giỏ hàng
  it('Should remove a product from the cart', () => {
    // Thêm sản phẩm vào giỏ
    cy.addFirstProductToCart();
    cy.get('.shopping_cart_badge').should('have.text', '1');
    // Nhấn nút Remove
    cy.get('.inventory_item').first().find('.btn_inventory').click();
    // Xác minh badge giỏ hàng không còn hiển thị
    cy.get('.shopping_cart_badge').should('not.exist');
  });

  // Kịch bản 6: Quy trình thanh toán
  it('Should complete the checkout process', () => {
    // Thêm sản phẩm vào giỏ
    cy.addFirstProductToCart();
    // Vào giỏ hàng
    cy.get('.shopping_cart_link').click();
    // Nhấn Checkout
    cy.get('#checkout').click();
    // Điền thông tin thanh toán
    cy.fillCheckoutInfo('John', 'Doe', '12345');
    // Nhấn Continue
    cy.get('#continue').click();
    // Xác minh chuyển đến trang xác nhận thanh toán
    cy.url().should('include', '/checkout-step-two.html');
  });
});
