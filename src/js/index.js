import './../styles/main.scss';

const template = require('../templates/index.pug');
const app = document.getElementById('app');

app.innerHTML = template();
