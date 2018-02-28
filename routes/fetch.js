const Models = require('../models');

module.exports = [{
  method: 'GET',
  path: '/fetch/{username}', // gets all the user response
  handler: (req, reply) => {
    const { username } = req.params;
    Models.responses.findOne({ where: { username } })
      .then((row) => {
        const response = JSON.parse(row.response);
        reply(response);
      });
  },
}];
