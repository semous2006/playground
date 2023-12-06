import 'cypress-wait-until';
describe('Frame Testing', () => {
  it('should test frames on the page', () => {
    cy.visit('https://demoqa.com/frames');

    // Switch to the frame and wait for it to load
    cy.waitUntil(() => cy.frameLoaded('#frame1', { timeout: 15000 })).then(() => {
      // Perform interactions inside the Single Frame
      cy.get('body').type('Hello, Single Frame!');
    });

    // Perform interactions in the default content without explicit switch

    // Switch to the frame and wait for it to load
    cy.waitUntil(() => cy.frameLoaded('#frame2', { timeout: 15000 })).then(() => {
      // Perform interactions inside the Nested Frame
      cy.get('body').should('contain.text', 'This is a sample page');
    });
  });
});





  
  
  