import './../styles/main.scss';

const template = require('../templates/index.pug');
const $app = document.getElementById('app');
const $menu = document.getElementById('menu');
const list = require('../templates/list.pug');
const footer = require('../templates/footer.pug');
const menuTemplate = require('../templates/menu.pug');

const newAnswer = {a : "fine"}
export let values = ['and', 'xand', 'zzzs'];

if (false) {
    values = [1,2,3]
}


$menu.innerHTML = menuTemplate();

$app.innerHTML = template({answer: "nnooooo!"}) + list({values}) + footer();