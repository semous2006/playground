describe('Checkout Process', () => {
    it('should complete the checkout process', () => {
      cy.visit('https://www.saucedemo.com');
      cy.get('[data-test="username"]').type('visual_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('.shopping_cart_link').click();
      cy.get('[data-test="checkout"]').should('be.visible').click()
      cy.get('[data-test="firstName"]').type('Eslam');
      cy.get('[data-test="lastName"]').type('Hassan');
      cy.get('[data-test="postalCode"]').type('12345');
      cy.get('[data-test="continue"]').click();
      cy.get('[data-test="finish"]').click();
      cy.url().should('include', '/checkout-complete.html');
    });
  });
  