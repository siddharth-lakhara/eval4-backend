const Models = require('../models');

module.exports = [{
  method: 'GET',
  path: '/leaders',
  handler: (req, reply) => {
    Models.users.findAll({
      limit: 5,
      where: {},
      order: [['score', 'DESC']],
    }).then((entries) => {
      reply(entries);
    });
  },
}];
