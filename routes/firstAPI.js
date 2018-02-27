module.exports = [{
  method: 'GET',
  path: '/first',
  handler: (req, reply) => {
    reply('path working');
  },
}];
