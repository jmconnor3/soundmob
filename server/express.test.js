const request = require('supertest');
const app = require('./app.js');

describe('Test the api path', () => {
  test('It should response the GET method', (done) => {
    request(app).get('/api').then((response) => {
         console.log(response);
     done();
     });    
  });
  //   test('It should response the POST method', (done) => {
  //     request(app).post('/').then((response) => {
  //         expect(response.statusCode).toBe(201);
  //         done();
  //     });
  // })
});
