// alerts_spec.js
describe('Alerts Testing', () => {
  it('should test alerts on the page', () => {
    cy.visit('https://demoqa.com/alerts');
    cy.get('#alertButton').click();

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contain('You clicked a button');
    });

    

  });
  it('Test Timer Alert', () => {
    cy.visit('https://demoqa.com/alerts');

    cy.get('#timerAlertButton').click();

    cy.wait(5000); 

    cy.on('window:timer alert', (alertText) => {
      expect(alertText).to.contain('This alert appeared after 5 seconds');
  
    });

 });

 it('Test Confirm Alert - Ok', () => {
  cy.visit('https://demoqa.com/alerts');
  

  cy.get('#confirmButton').click();

  cy.on('window:confirm', (confirmText) => {
    expect(confirmText).to.contain('Do you confirm action?');

    cy.get('#confirmResult').should('have.text', 'You selected Ok');
  });
});

it('Test Confirm Alert - Cancel', () => {
  

  cy.get('#confirmButton').click();

  cy.on('window:confirm', (confirmText) => {
    expect(confirmText).to.contain('Do you confirm action?');
  });
  cy.on('window:confirm', ()=> false);
  cy.get('#confirmResult').should('have.text', 'You selected Cancel');
});
  
});

