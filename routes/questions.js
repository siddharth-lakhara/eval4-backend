const Models = require('../models');

module.exports = [{
  method: 'GET',
  path: '/questions',
  handler: (req, reply) => {
    Models.questions.findAll()
      .then((allQuestions) => {
        if (allQuestions.length === 0) { // if no questions in DB
          reply({});
        }
        const replyObject = allQuestions.map((question) => {
          const { questn, questnid, options } = question.dataValues;
          return {
            questn,
            questnid,
            options,
          };
        });
        reply(replyObject);
      });
  },
}];
