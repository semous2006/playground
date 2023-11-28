describe('Invalid Login - Incorrect Password', () => {
    it('should display an error message for invalid password', () => {
      cy.visit('https://saucedemo.com');
      cy.get('[data-test="username"]').type('Eslam');
      cy.get('[data-test="password"]').type('Hassan');
      cy.get('[data-test="login-button"]').click();
      cy.get('[data-test="error"]').should('be.visible');
      cy.url().should('not.include', '/inventory.html');
    });
  });
  