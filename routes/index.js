const ping = require('./ping');
const updatedb = require('./updatedb');
const firstAPI = require('./firstAPI');
const secondAPI = require('./secondAPI');
const getall = require('./getall');
const login = require('./login');

module.exports = [].concat(ping, updatedb, firstAPI, secondAPI, getall, login);

