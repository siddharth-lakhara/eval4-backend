const firstAPIHandler = require('./Handlers/firstAPI');

module.exports = [{
  method: 'GET',
  path: '/first',
  handler: (req, reply) => {
    const url1 = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allQuestions';
    firstAPIHandler(url1).then((response) => {
      reply(response);
    });
  },
}];
