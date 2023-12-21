// cypress/e2e/createBooking.spec.js
describe('Create Booking - Successful Scenario', () => {
  it('Should successfully create a new booking', () => {
    
    const createBookingEndpoint = 'https://restful-booker.herokuapp.com/booking';

    const bookingData = {
      firstname: "Eric",
      lastname: "Brown",
      totalprice: 831,
      depositpaid: false,
      bookingdates: {
      checkin: "2016-08-13",
      checkout: "2023-01-16"
    },
    additionalneeds: 'Breakfast'
      
    };

  
    cy.request('POST', createBookingEndpoint, bookingData)
      .should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('bookingid');
      });
  });
});