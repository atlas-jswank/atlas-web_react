import $ from 'jquery';
import _ from 'lodash';

function element({ e, text, id }) {
  const elm = document.createElement(e);
  elm.innerHTML = text;
  if (id) {
    elm.id = id;
  }
  return elm;
}

const p = ({ id, text }) => element({ e: 'p', text, id });
const button = (text) => element({ e: 'button', text });

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

let count = 0;
function updateCounter() {
  count++;
  const elm = document.getElementById('count');
  elm.innerHTML = `${count} clicks on the button`;
}

document.getElementsByTagName('button')[0].onclick = _.debounce(
  updateCounter,
  500
);
