const ping = require('./ping');
const updatedb = require('./updateDB');
const firstAPI = require('./firstAPI');
const secondAPI = require('./secondAPI');

module.exports = [].concat(ping, updatedb, firstAPI, secondAPI);

