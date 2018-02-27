const secondAPIHandler = require('./Handlers/secondAPI');

module.exports = [{
  method: 'GET',
  path: '/second/{id}',
  handler: (req, reply) => {
    const url2 = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findAnswerById/';
    const qID = req.params.id;
    secondAPIHandler(url2 + qID).then((response) => {
      reply(response);
    });
  },
}];
