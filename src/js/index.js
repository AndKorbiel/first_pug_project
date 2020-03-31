import './../styles/main.scss';

const $app = document.getElementById('app');
const $menu = document.getElementById('menu');
const $footer = document.getElementById('footer');

const index = require('../templates/index.pug');
const listPage = require('../templates/list-page.pug');
const footer = require('../templates/footer.pug');
const menuTemplate = require('../templates/menu.pug');

// const newAnswer = {a : "fine"}
// export let values = ['and', 'xand', 'zzzs'];

// if (false) {
//     values = [1,2,3]
// }


$menu.innerHTML = menuTemplate();
$app.innerHTML = index();
$footer.innerHTML = footer();
