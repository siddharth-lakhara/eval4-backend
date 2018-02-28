const Models = require('../models');

module.exports = [{
  method: 'POST',
  path: '/login',
  handler: (req, reply) => {
    const userName = req.payload;
    Models.users.findOrCreate({ where: { username: userName } })
      .spread((row, bool) => {
        if (bool) { // new user is created
          Models.users.update(
            { score: 0 },
            { where: { username: userName } },
          ).then(() => {
            Models.responses.create({
              username: userName,
              response: JSON.stringify({}),
            });
          });
        }
        reply();
      });
  },
}];
