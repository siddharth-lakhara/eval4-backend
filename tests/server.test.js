const http = require('http');

describe('Tests for basic server functionality', () => {
  test('Server running', () => {
    http.get('http://localhost:8080/ping', (response) => {
      response.setEncoding('utf8');
      expect(response.statusCode).toBe(200);
      response.on('data', () => {
        done();
      });
    });
  });
});
