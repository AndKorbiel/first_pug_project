import './../styles/main.scss';

const template = require('../templates/index.pug');
const app = document.getElementById('app');
const list = require('../templates/list.pug');

const newAnswer = {a : "fine"}
const values = ['and', 'xand']

app.innerHTML = template();
app.innerHTML += list({values})