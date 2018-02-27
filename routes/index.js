const ping = require('./ping');
const updatedb = require('./updateDB');

module.exports = [].concat(ping, updatedb);

