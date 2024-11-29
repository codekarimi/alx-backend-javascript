const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('getPaymentTokenFromAPI', function() {
  it('should return a resolved promise', function(done) {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        expect(res).to.eql({data: 'Successful response from the API'});
        done();
      })
      .catch((error) => done(error));
  });
});
