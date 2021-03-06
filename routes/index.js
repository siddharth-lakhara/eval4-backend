const ping = require('./ping');
const updatedb = require('./updatedb');
const firstAPI = require('./firstAPI');
const secondAPI = require('./secondAPI');
const getall = require('./getall');
const login = require('./login');
const submit = require('./submit');
const leaders = require('./leaders');
const calc = require('./calc');
const fetch = require('./fetch');
const questions = require('./questions');

module.exports = [].concat(
  ping, updatedb, firstAPI, secondAPI, getall, login,
  submit, leaders, calc, fetch, questions,
);

