describe('Valid Login', () => {
    it('should successfully log in with valid credentials', () => {
      cy.visit('https://www.saucedemo.com');
      cy.get('[data-test="username"]').type('visual_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
      cy.url().should('include', '/inventory.html');
    });
  });
  