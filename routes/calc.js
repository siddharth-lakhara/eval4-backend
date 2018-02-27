const Models = require('../models');

module.exports = [{
  method: 'POST',
  path: '/calc',
  handler: (req, reply) => {
    const { username } = req.payload;
    Models.responses.findOne({ where: { username } })
      .then((row) => {
        const response = JSON.parse(row.response);
        let score = 0;
        const CorrectAnswers = [];

        Object.keys(response).map((index) => {
          const questnid = Number(response[index].questnid);
          const pr = Models.answers.findOne({ where: { questnid } });
          CorrectAnswers.push(pr);
        });

        Promise.all(CorrectAnswers).then((allAnswers) => {
          allAnswers.map((oneAnswer, index) => {
            if (oneAnswer.answer === response[index].answer) { score += 1; }
          });
          Models.users.update(
            { score },
            { where: { username } },
          ).then(() => {
            reply(score);
          });
        });
      });
  },
}];
