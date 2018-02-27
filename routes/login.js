const Models = require('../models');

module.exports = [{
  method: 'POST',
  path: '/login',
  handler: (req, reply) => {
    const { userName } = req.payload;
    Models.users.findOrCreate({ where: { username: userName } })
      .spread((row, bool) => {
        if (bool) { // a new user was created
          Models.users.findAll().then((allRow) => {
            const newUserId = allRow.length + 1;
            Models.users.update(
              { score: 0, userid: newUserId },
              { where: { username: userName } },
            ).then(() => {
              Models.responses.create({ // create empty response
                userid: newUserId,
                response: JSON.stringify({}),
              });
              reply(newUserId);
            });
          });
        } else { // user already existed
          reply(row.userid);
        }
      });
  },
}];
