const request = require('request');
const expect = require('chai').expect;

describe('Index page', function() {
  it('should have correct status code and return message', function(done) {
    request('http://localhost:7865', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});