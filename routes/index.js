const ping = require('./ping');
const updatedb = require('./updateDB');
const firstAPI = require('./firstAPI');

module.exports = [].concat(ping, updatedb, firstAPI);

