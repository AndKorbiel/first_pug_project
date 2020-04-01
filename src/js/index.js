import './../styles/main.scss';

const $app = document.getElementById('app');
const $menu = document.getElementById('menu');
const $footer = document.getElementById('footer');

const index = require('../views/index.pug');
const listPage = require('../views/list-page.pug');
const footer = require('../views/footer.pug');
const menuTemplate = require('../views/menu.pug');

const newAnswer = {a : "fine"};
export let values = ['First value', ' second', ' and so on'];

if (false) {
    values = [1,2,3]
}

$menu.innerHTML = menuTemplate();
$app.innerHTML = index();
$footer.innerHTML = footer();
