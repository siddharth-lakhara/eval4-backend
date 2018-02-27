const ping = require('./ping');
const updatedb = require('./updatedb');
const firstAPI = require('./firstAPI');
const secondAPI = require('./secondAPI');
const getall = require('./getall');

module.exports = [].concat(ping, updatedb, firstAPI, secondAPI, getall);

