import './../styles/main.scss';

const template = require('../templates/index.pug');
const app = document.getElementById('app');

const newAnswer = {a : "fine"}

app.innerHTML = template(newAnswer.a);
