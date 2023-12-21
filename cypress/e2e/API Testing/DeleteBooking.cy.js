// Test Case: Successful Deletion of a Booking
describe('Delete Booking - Successful Scenario', () => {
  let bookingId;

  before(() => {
 
    const createBookingEndpoint =  'https://restful-booker.herokuapp.com/booking/1';
    const bookingData = {
      firstname: "Eric",
      lastname: "Jackson",
      totalprice: 114,
      depositpaid: false,
      bookingdates: {
        checkin: "2022-03-04",
        checkout: "2023-07-22"
      },
      additionalneeds: 'Breakfast'
    };

    cy.request('POST', createBookingEndpoint, bookingData)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('bookingid');
        bookingId = response.body.bookingid;

        const deleteBookingEndpoint =  'https://restful-booker.herokuapp.com/booking/1';
        return cy.request('DELETE', deleteBookingEndpoint);
      })
      .then((deleteResponse) => {
      
        expect(deleteResponse.status).to.eq(200);
        
      });
  });

});