const firstAPIHandler = require('./Handlers/firstAPI');
const secondAPIHandler = require('./Handlers/secondAPI');
const Models = require('../models');

module.exports = [{
  method: 'GET',
  path: '/updatedb',
  handler: (req, reply) => {
    const returnObject = [];
    const PromiseArray = [];
    const url1 = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allQuestions';
    const url2 = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findAnswerById/';

    // clearing db
    // Not using .then coz local DB will be cleared by the time
    // data from first API is fetched
    Models.questions.destroy({ where: {} });
    Models.answers.destroy({ where: {} });

    firstAPIHandler(url1).then((allQuestions) => { // get all questions from api1
      const returnQuestionObject = allQuestions.allQuestions;
      (allQuestions.allQuestions).map((question) => {
        const questionObject = {
          questn: question.question,
          questnid: question.questionId,
          options: // this can be modified to have N number of options
            `${question.option1},${
              question.option2},${
              question.option3},${
              question.option4}`,
        };

        Models.questions.create(questionObject);

        // type coersion will handle the concatenation
        PromiseArray.push(secondAPIHandler(url2 + question.questionId));
      });
      Promise.all(PromiseArray).then((PromiseElement) => {
        PromiseElement.map((answer, index) => {
          returnQuestionObject[index].answer = answer.answer;
          Models.answers.create({
            questnid: returnQuestionObject[index].questionId,
            answer: returnQuestionObject[index].answer,
          });
        });
        reply(returnQuestionObject);
      });
    });
  },
}];
