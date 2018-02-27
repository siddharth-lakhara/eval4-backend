const https = require('https');

const secondAPIHandler = url => (new Promise((resolve) => {
  let retData = '';
  https.get(url, (response) => {
    response.setEncoding('utf8');
    response.on('data', (data) => {
      retData += data;
    });
    response.on('end', () => {
      retData = JSON.parse(retData);
      resolve(retData);
    });
  });
}));

module.exports = secondAPIHandler;
