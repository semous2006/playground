// cypress/e2e/updateBooking.spec.js
describe('Update Booking', () => {
  it('should attempt to update a booking', () => {
    const updateBookingEndpoint = 'https://restful-booker.herokuapp.com/booking/1';

    const updatedBookingData = {
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

    cy.request({
      method: 'PUT',
      url: updateBookingEndpoint,
      body: updatedBookingData,
      failOnStatusCode: false
    }).then((response) => {
     
      console.log(response);
       
      });
  });
});

