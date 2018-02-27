const Models = require('../models');

module.exports = [{
  method: 'POST',
  path: '/login',
  handler: (req, reply) => {
    const { userName } = req.payload;
    Models.users.findOrCreate({ where: { username: userName } })
      .spread((row, bool) => {
        if (bool) {
          Models.users.findAll().then((allRow) => {
            const newUserId = allRow.length + 1;
            Models.users.update(
              { score: 0, userid: newUserId },
              { where: { username: userName } },
            ).then((newRow) => {
              reply(newRow.userId);
            });
          });
        } else {
          reply(row.userid);
        }
      });
  },
}];
