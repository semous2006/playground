// cypress/support/customCommands.js

  // Custom command for login 
  Cypress.Commands.add('loginapp', (username,password)=> {
    cy.get('[data-test="username"]').type('visual_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
  });

  describe('Example Test', () => {
    it('should perform a login and add an item to the cart', () => {

  cy.visit('https://www.saucedemo.com');

  cy.loginapp('visual_user', 'secret_sauce');

  cy.get('#item_4_title_link > .inventory_item_name').click();
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('.shopping_cart_badge').should('have.text', '1');

    });
  });  