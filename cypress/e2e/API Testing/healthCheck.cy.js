
// Test Case: Health Check for the Ping – HealthCheck Endpoint
describe('Health Check - Ping Endpoint', () => {
    it("GET API testing Using Cypress API Plugin", () => {
      cy.request("GET", 'https://restful-booker.herokuapp.com/ping')
        .should((response) => {
        expect(response.status).to.eq(201);
      });
    });
        
  });
 
