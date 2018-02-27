const firstAPIHandler = require('./Handlers/firstAPI');
const secondAPIHandler = require('./Handlers/secondAPI');

module.exports = [{
  method: 'GET',
  path: '/getall',
  handler: (req, reply) => {
    const returnObject = [];
    const PromiseArray = [];
    const url1 = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allQuestions';
    const url2 = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findAnswerById/';
    firstAPIHandler(url1).then((allQuestions) => { // get all books from api1
      const returnQuestionObject = allQuestions.allQuestions;
      (allQuestions.allQuestions).map((question) => {
        returnObject.push({
          questionId: question.questionId,
        });
        PromiseArray.push(secondAPIHandler(url2 + question.questionId));
      });
      Promise.all(PromiseArray).then((PromiseElement) => {
        PromiseElement.map((answer, index) => {
          returnQuestionObject[index].answer = answer.answer;
        });
        reply(returnQuestionObject);
      });
    });
  },
}];
