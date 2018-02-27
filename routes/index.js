const ping = require('./ping');
const updatedb = require('./updatedb');
const firstAPI = require('./firstAPI');
const secondAPI = require('./secondAPI');
const getall = require('./getall');
const login = require('./login');
const submit = require('./submit');
const leaders = require('./leaders');

module.exports = [].concat(ping, updatedb, firstAPI, secondAPI, getall, login, submit, leaders);

