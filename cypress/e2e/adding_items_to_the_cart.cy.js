describe('Add Item to Cart', () => {
    it('should add an item to the shopping cart', () => {
      cy.visit('https://www.saucedemo.com');
      cy.get('[data-test="username"]').type('visual_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
      cy.get('#item_4_title_link > .inventory_item_name').click();
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('.shopping_cart_badge').should('have.text', '1');
    });
  });
  