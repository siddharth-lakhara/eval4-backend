const Models = require('../models');

module.exports = [{
  method: 'POST',
  path: '/submit',
  handler: (req, reply) => {
    const { username, questnid, answer } = req.payload;
    Models.responses.findOne({ where: { username } })
      .then((oldResponse) => {
        console.log(oldResponse);
        const newResponse = JSON.parse(oldResponse.response);
        let found = false;
        Object.keys(newResponse).map((index) => {
          if (newResponse[index].questnid === questnid) {
            found = true; // the user has already answered this question
            newResponse[index].answer = answer;
          }
        });
        if (!found) {
          const index = Object.keys(newResponse).length;
          newResponse[index] = { questnid, answer };
        }
        Models.responses.update(
          { response: JSON.stringify(newResponse) },
          { where: { username } },
        ).then(() => {
          reply();
        });
      });
  },
}];
